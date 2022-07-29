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

export function usePokedex(searchParams) {
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    setPage(1);
  }, [searchParams.toString()]);

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
  }, [searchParams.toString(), page]);

  const addPage = () => {
    setPage((page) => page + 1);
  };
  
  return { pokedex, error, addPage };
}
