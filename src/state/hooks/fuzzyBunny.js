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


  const createAction =
    (service, type, makeSuccessMessage) =>
      async (...args) => {
        const { data, error } = await service(...args);

        if (error) showError(error.message);

        if (data) {
          dispatch({ type, payload: data });
          const successMessage = makeSuccessMessage(data);
          showSuccess(successMessage);
        }
      };

  const add = createAction(
    addFamily,
    'add',
    (data) => `Added ${data.name}`
  );

  const remove = createAction(
    removeFamily,
    'remove',
    (data) => `Removed ${data.name}`
  );

  const update = createAction(
    updateFamily,
    'update',
    (data) => `Updated ${data.name}`
  );

  return { add, remove, update };
}

