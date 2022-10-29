class Stack {
  #size;
  constructor() {
    this.#size = 0;
    this.heade = null;
  }

  get initStackSize() {
    return this.#size;
  }

  get size() {
    if (this.#size === 0) {
      return undefined;
    }
    return this.#size;
  }

  pop() {
    if (this.#size === 0) {
      return undefined;
    }
    const currentNode = this.heade.value;
    this.heade = this.heade.next;
    this.#size = this.#size - 1;
    return currentNode;
  }

  push(value) {
    if (value === undefined) {
      return this.#size;
    }
    const node = { value, next: this.heade };
    this.heade = node;
    this.#size = this.#size + 1;
    return this.size;
  }
}

module.exports = Stack;
