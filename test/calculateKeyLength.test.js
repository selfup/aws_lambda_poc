import calculateKeyLength from './../src/calculateKeyLength';

test('it calculates key length', () => {
  const objLength = calculateKeyLength({ hi: 'hi' });
  const arrLength = calculateKeyLength([42]);

  expect(objLength).toBe(1);
  expect(arrLength).toBe(1);
});
