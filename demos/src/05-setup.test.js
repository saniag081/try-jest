describe('Set', () => {
  // beforeAll(() => {
  //   console.log('beforeAll');
  //   // up db
  // });
  // afterAll(() => {
  //   console.log('afterAll');
  //   // down bd
  // });

  // beforeEach(() => {
  //   console.log('beforeEach');
  // });

  // afterEach(() => {
  //   console.log('afterEach');
  // });

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    expect(1 + 2).toBe(3);
  });

  describe('other group', () => {
    test('case 3', () => {
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      expect(1 + 2).toBe(3);
    });
  });
});
