import { useEffect, useContext, useState } from 'react';
import { FuzzyBunnyContext } from '../context/FuzzyBunnyContext.jsx';
import {
  getFamiliesWithBunnies,
  addFamily,
  removeFamily,
  updateFamily,
} from '../services/fuzzy-bunny-service.js';
import { showSuccess, showError } from '../services/toaster.js';

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families, dispatch } = useContext(FuzzyBunnyContext);
  
  useEffect(() => {
    if (families) return;
    let ignore = false;
  
    const fetch = async () => {
      const { data, error } = await getFamiliesWithBunnies();
      if (ignore) return;
  
      if (error) {
        setError(error);
      }
      if (data) {
        dispatch({ type: 'load', payload: data });
      }
    };
  
    fetch();
  
    return () => (ignore = true);
  }, []);
  
  return { families, error };
}

export function useActions() {
  const { dispatch } = useContext(FuzzyBunnyContext);


  const add = async (family) => {
    const { data, error } = await addFamily(family);
    if (error) {
      showError(error.message);
    }
    if (data) {
      dispatch({ type: 'add', payload: data });
      showSuccess(`Added ${data.name}`);
    }
  };

  const remove = async (id) => {
    const { data, error } = await removeFamily(id);
    if (error) {
      showError(error.message);
    }
    if (data) {
      dispatch({ type: 'remove', payload: data });
      showSuccess(`Removed ${data.name}`);
    }
  };

  const update = async (family) => {
    const { data, error } = await updateFamily(family);
    if (error) {
      showError(error.message);
    }
    if (data) {
      dispatch({ type: 'update', payload: data });
      showSuccess(`Updated ${data.name}`);
    }
  };

  return { add, remove, update };
}

