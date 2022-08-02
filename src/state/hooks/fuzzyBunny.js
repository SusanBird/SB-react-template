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
  const { families, familyDispatch } = useContext(FuzzyBunnyContext);
  
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
        familyDispatch({ type: 'load', payload: data });
      }
    };
  
    fetch();
  
    return () => (ignore = true);
  }, []);
  
  return { families, error };
}

function createDispatchActions(dispatch) {
  return function createAction({ service, type, success }) {
    return async (...args) => {
      const { data, error } = await service(...args);

      if (error) showError(error.message);

      if (data) {
        dispatch({ type, payload: data });
        const successMessage = success(data);
        showSuccess(successMessage);
      }
    };

  };
}

export function useFamilyActions() {
  const { familyDispatch } = useContext(FuzzyBunnyContext);

  const createAction = createDispatchActions(familyDispatch);

  const add = createAction({
    service: addFamily,
    type: 'add',
    success: (data) => `Added ${data.name}`,
  });

  const remove = createAction({
    service: removeFamily,
    type: 'remove',
    success: (data) => `Removed ${data.name}`,
  });

  const update = createAction({
    service: updateFamily,
    type: 'update',
    success: (data) => `Updated ${data.name}`,
  });

  return { add, remove, update };
}
