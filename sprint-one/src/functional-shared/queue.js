var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.storage.size = 0;
  newQueue.storage.first = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[size] = value;
  this.storage.size++;
};

queueMethods.dequeue = function() {
  var res = this.storage[first];
  delete this.storage[first];
  this.storage.first++;
  return res;
};

queueMethods.size = function() {
  return (this.storage.size - this.storage.first < 0) ? 0 : Math.max(this.storage.size - this.storage.first);
};

