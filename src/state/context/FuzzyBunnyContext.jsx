import { createContext, useMemo, useReducer } from 'react';

export const FuzzyBunnyStateContext = createContext();
export const FuzzyBunnyActionContext = createContext();

function reducer(list, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...list, payload];
    case 'update':
      return list.map((f) => (f.id === payload.id ? payload : f));
    case 'remove':
      return list.filter((f) => f.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, familiesDispatch] = useReducer(reducer, null);

  const stateValue = {
    families,
  };

  const dispatchValue = useMemo(
    () => ({
      familiesDispatch,
    }),
    [familiesDispatch]
  );

  return (
    <FuzzyBunnyStateContext.Provider value={stateValue}>
      <FuzzyBunnyActionContext.Provider value={dispatchValue}>
        {children}
      </FuzzyBunnyActionContext.Provider>
    </FuzzyBunnyStateContext.Provider>
  );
}
