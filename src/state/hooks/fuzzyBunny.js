import { useContext, useEffect, useMemo, useState } from 'react';
import {
  FuzzyBunnyStateContext,
  FuzzyBunnyActionContext,
} from '../context/FuzzyBunnyContext.jsx';
import {
  getFamiliesWithBunnies,
  removeFamily,
  addFamily,
  updateFamily,
} from '../services/fuzzyBunnyService.js';
import { showSuccess, showError } from '../services/toaster.js';

export function useSimpleFamilies() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await getFamiliesWithBunnies();
      setResponse(response);
    };
    fetch();
  }, []);

  return response;
}

export function useFamilies() {
  const [error, setError] = useState(null);
  const { families } = useContext(FuzzyBunnyStateContext);
  const { familiesDispatch } = useContext(FuzzyBunnyActionContext);

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
        familiesDispatch({ type: 'load', payload: data });
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
  const { familiesDispatch } = useContext(FuzzyBunnyActionContext);

  const createAction = createDispatchActions(familiesDispatch);

  const add = createAction({
    service: addFamily,
    type: 'add',
    success: (data) => `Added new family "${data.name}"`,
  });

  const remove = createAction({
    service: removeFamily,
    type: 'remove',
    success: (data) => `Removed family "${data.name}"`,
  });

  const update = createAction({
    service: updateFamily,
    type: 'update',
    success: (data) => `Updated family "${data.name}"`,
  });

  return useMemo(() => ({ add, remove, update }), [familiesDispatch]);
}
