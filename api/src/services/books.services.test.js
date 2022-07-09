const BooksServices = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const mongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => mongoLibStub));

describe('Test for booksServices', () => {
  let service;

  beforeEach(() => {
    service = new BooksServices();
    jest.clearAllMocks();
  });

  describe('get for getbooks', () => {
    test('should return a list books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(1);
    });
  });
});
