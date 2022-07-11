const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];

  for (let index = 0; index < limit; index += 1) {
    fakeBooks.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
    });
  }

  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBooks };
