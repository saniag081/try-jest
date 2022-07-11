const { generateManyBooks } = require('../fakes/book.feke');
const BooksServices = require('./books.service');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Test for booksServices', () => {
  let service;

  beforeEach(() => {
    service = new BooksServices();
    jest.clearAllMocks();
  });

  describe('get for getbooks', () => {
    test('should return a list books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
