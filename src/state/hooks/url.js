import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return Object.fromEntries(searchParams.entries());
  }, [searchParams]);

  const setSearch = (search) => {
    const clean = removeEmptyKeys(search);
    setSearchParams(clean);
  };

  return [search, setSearch];
}

export function removeEmptyKeys(obj) {
  const filtered = Object.entries(obj).filter(
    ([, value]) =>
      value !== undefined && value !== null && value !== ''
  );
  return Object.fromEntries(filtered);
}
