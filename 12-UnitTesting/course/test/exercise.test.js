const exercise = require('../exercise1');

describe('fizzbuzz', () => {
  it('should throw error if input is not a number', () => {
    expect(() => { exercise.fizzBuzz('A') }).toThrow();
  });

  it('should return fizzbuzz if number is divisible by 3 & 5', () => {
    const res = exercise.fizzBuzz(15);
    expect(res).toMatch(/FizzBuzz/);
  });

  it('should return fizz if number is only divisible by 3', () => {
    const res = exercise.fizzBuzz(6);
    expect(res).toMatch(/Fizz/);
  });

  it('should return buzz if number is only divisible by 3', () => {
    const res = exercise.fizzBuzz(10);
    expect(res).toMatch(/Buzz/);
  });

  it('should return number if it is not divisible by 3 & 5', () => {
    const res = exercise.fizzBuzz(8);
    expect(res).toBe(8);
  });
})