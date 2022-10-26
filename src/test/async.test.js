const fetchProduct = require('../async');

describe('async fetch', () => {
  it('async resolve', async () => {
    const item = await fetchProduct();
    expect(item).toEqual({ item: 'Milk', price: 200 });
  });
  it('async reject', async () => {
    try {
      await fetchProduct('error');
    } catch (error) {
      expect(error).toMatch('network error');
    }
  });
});
