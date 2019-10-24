var Stack = function(size) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.storage.size = 0;
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[size] = value;
  this.storage.size++;
};

stackMethods.pop = function() {
  var res = this.storage[size - 1];
  delete this.storage[size - 1];
  this.storage.size--;
  return res;
};

stackMethods.size = function() {
  return this.storage.size < 0 ? 0 : this.storage.size;
};