const Person = require('./06-person');

describe('Test for person', () => {
  let person;

  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('Should return down', () => {
    person.weight = 45;
    const muscleMassIndex = person.calcIMC();
    expect(muscleMassIndex).toBe('down');
  });

  test('Should return noraml', () => {
    person.weight = 59;
    const muscleMassIndex = person.calcIMC();
    expect(muscleMassIndex).toBe('normal');
  });
});
