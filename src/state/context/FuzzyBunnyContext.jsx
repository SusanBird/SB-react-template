import { createContext, useReducer } from 'react';

export const FuzzyBunnyContext = createContext();

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
  const [families, familyDispatch] = useReducer(reducer, null);
  const [bunnies, bunniesDispatch] = useReducer(reducer, null);

  const value = {
    families,
    familyDispatch,
    bunnies,
    bunniesDispatch,
  };

  return (
    <FuzzyBunnyContext.Provider value={value}>
      {children}
    </FuzzyBunnyContext.Provider>
  );
}
