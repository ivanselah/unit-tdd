class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index < 0) {
      throw new Error('index 는 0보다 작을 수 없습니다.');
    }
    const nodeData = new Node(data);
    if (index === 0) {
      nodeData.next = this.head;
      this.head = nodeData;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = nodeData;
    }
    this.count++;
  }

  getNodeAt(index) {
    if (index < 0) {
      throw new Error('index 는 0보다 작을 수 없습니다.');
    }
    if (index >= this.count) {
      throw new Error(`해당 index 는 비어 있습니다.`);
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const linkedList = new LinkedList();
linkedList.insertAt(0, 0);
linkedList.insertAt(1, 1);
linkedList.insertAt(2, 2);
linkedList.insertAt(3, 3);

console.log(linkedList.getNodeAt(3));
