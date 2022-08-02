import { removeEmptyKeys } from './url.js';

test('removes null, undefined, and empty string value keys', () => {
  const actual = removeEmptyKeys({
    key1: 'value',
    key2: undefined,
    key3: null,
    key4: '',
  });

  expect(actual).toEqual({ key1: 'value' });
});
