var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.storage.size = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[value] = value;
  this.storage.size++;
};

stackMethods.pop = function() {
  var res = this.storage[size - 1];
  delete this.storage[size - 1];
  this.storage.size--;
  return res;
};

stackMethods.size = function() {
  return this.storage.size;
};



