class ProductClient {
  fetchItems() {
    return fetch('https://jsonplaceholder.typicode.com/todos').then(
      (response) => response.json()
    );
  }
}

module.exports = ProductClient;
