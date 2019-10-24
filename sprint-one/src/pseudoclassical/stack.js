var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.size = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.storage.size] = value;
  this.storage.size++;
  return this.storage[this.storage.size];
};

Stack.prototype.pop = function() {
  var res = this.storage[this.storage.size - 1];
  delete this.storage[this.storage.size - 1];
  this.storage.size--;
  return res;
};

Stack.prototype.size = function() {
  return this.storage.size < 0 ? 0 : this.storage.size;
};
