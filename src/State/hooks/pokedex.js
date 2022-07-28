import { useState, useEffect } from 'react';
import { getPokedex } from '../services/pokedex-service.js';

export function usePokedex() {
  const [error, setError] = useState(null);
  const [pokedex, setPokedex] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const { data = {}, error } = await getPokedex();

      if (data) {
        const { results, count } = data;
        setPokedex(results);
        setCount(count);
        setError(null);
      }

      if (error) {
        setError(error);
      }
    };

    fetch();
  }, []);

  return { pokedex, error, count };
}
