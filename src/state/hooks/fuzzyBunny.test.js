import { renderHook, waitFor } from '@testing-library/react';
import { getFamiliesWithBunnies } from '../services/fuzzyBunnyService.js';

// service mocks
jest.mock('../services/fuzzyBunnyService.js', () => ({
  getFamiliesWithBunnies: jest.fn(),
}));
import { useSimpleFamilies } from './fuzzyBunny.js';

test('use families returns list of families', async () => {
  const families = [{}, {}, {}];
  getFamiliesWithBunnies.mockResolvedValueOnce({
    data: families,
    error: null,
  });

  const { result } = renderHook(() => useSimpleFamilies());

  await waitFor(() => {
    return expect(result.current).not.toBeNull();
  });

  const { data, error } = result.current;

  expect(error).toBeNull();
  expect(data).toEqual(families);
});
