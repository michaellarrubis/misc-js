class Stack {
  constructor () {
    this.items = [];
    this.count = 0;
  }

  push(value) {
    this.items[this.count] = value;
    this.count += 1;
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return undefined;

    const deleteItem = this.items[this.count - 1];
    this.count -= 1;
    return deleteItem;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = [];
    this.count = 0;
    return this.items;
  }
}