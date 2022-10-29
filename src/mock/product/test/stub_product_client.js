class StubProductClient {
  async fetchItems() {
    return [
      { item: 'Milk1', available: true },
      { item: 'Milk2', available: false },
    ];
  }
}

module.exports = StubProductClient;
