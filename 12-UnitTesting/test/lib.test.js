const lib = require('../lib')

test('absolute -should return a +ve number if input is +ve', () => {
  const res = lib.absolute(1);
  expect(res).toBe(1);
});

test('absolute -should return a +ve number if input is -ve', () => {
  const res = lib.absolute(-1);
  expect(res).toBe(1);
});

test('absolute -should return a 0 number if input is 0', () => {
  const res = lib.absolute(0);
  expect(res).toBe(0);
});