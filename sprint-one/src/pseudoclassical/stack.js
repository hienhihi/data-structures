var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.size = 0;
};
console.log('hello');
Stack.prototype.push = function(value) {
  this.storage[this.size] = value;
  this.size++;
  return this.storage[this.size];
};

Stack.prototype.pop = function() {
  var res = this.storage[this.size - 1];
  delete this.storage[this.size - 1];
  this.size--;
  return res;
};

Stack.prototype.size = function() {
  return this.size;
};
