class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(size) {
    this.storage = {};
    this.storage.size = 0;
  }

  push(value) {
    this.storage[this.storage.size] = value;
    this.storage.size++;
    return this.storage[this.storage.size];
  }

  pop() {
    var res = this.storage[this.storage.size - 1];
    delete this.storage[this.storage.size - 1];
    this.storage.size--;
    return res;
  }

  size() {
    return this.storage.size < 0 ? 0 : this.storage.size;
  }
}