import { createContext, useReducer } from 'react';

export const FuzzyBunnyContext = createContext();

function reducer(families, { type, payload }) {
  switch (type) {
    case 'load':
      return payload;
    case 'add':
      return [...families, payload];
    case 'update':
      return families.map((f) => (f.id === payload.id ? payload : f));
    case 'remove':
      return families.filter((f) => f.id !== payload.id);
    default:
      throw Error(`Unknown action: ${type}`);
  }
}

export default function FuzzyBunnyProvider({ children }) {
  const [families, dispatch] = useReducer(reducer, null);

  // TODO: useMemo?
  const value = { families, dispatch };

  return (
    <FuzzyBunnyContext.Provider value={value}>
      {children}
    </FuzzyBunnyContext.Provider>
  );
}
