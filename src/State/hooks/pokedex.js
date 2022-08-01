import { useState, useEffect } from 'react';
import { getPokedex, getTypes } from '../services/pokedex-service.js';

export function useTypes() {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await getTypes();
      setTypes(data);
      setError(error);
    };

    fetch();
  }, []);

  return { types, error };
}

export function usePokedex(searchParams, options) {
  const searchQuery = searchParams.toString();
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState([]);
  const [query, setQuery] = useState(searchQuery);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(options?.perPage ?? 25);

  useEffect(() => {
    setQuery(searchQuery);
    setPage(1);
    setPokedex([]);
  }, [searchQuery]);

  useEffect(() => {
    const fetch = async () => {
      const { data = {}, error } = await getPokedex(
        searchParams,
        page
      );

      if (data) {
        const { results, count } = data;
        setCount(count);
        setPage(page);
        setPerPage(perPage);
        setError(null);

        if (page === 1) {
          setPokedex(results);
        } else {
          setPokedex((pokedex) => [...pokedex, ...results]);
        }
      }

      if (error) {
        setError(error);
      }
    };

    fetch();
  }, [query, page]);

  const addPage = () => {
    setPage((page) => (page * perPage > count ? page : page + 1));
  };

  return { pokedex, error, addPage };
}
