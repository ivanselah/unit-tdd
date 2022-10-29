const StubProductClient = require('./stub_product_client');
const ProductService = require('../product_service');

jest.mock('../product_client');

describe('fetch items', () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it('available items', () => {
    return productService.fetchAvailableItems().then((item) => {
      expect(item).toEqual([{ item: 'Milk1', available: true }]);
    });
  });
});
