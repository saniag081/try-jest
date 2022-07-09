const BooksServices = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

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
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(1);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list books', async () => {
      // Arrange
      mockSpyGetAll.mockResolvedValue([
        {
          _id: 1,
          name: 'Harry Potter 2',
        },
      ]);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
