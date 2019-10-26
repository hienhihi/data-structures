var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storage.size = 0;
  this.storage.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.storage.size] = value;
  this.storage.size++;
  return this.storage[this.storage.size];
};
 
Queue.prototype.dequeue = function() {
  var res = this.storage[this.storage.first];
  delete this.storage[this.storage.first];
  this.storage.first++;
  return res;
};

Queue.prototype.size = function() {
  return (this.storage.size - this.storage.first < 0) ? 0 : Math.max(this.storage.size - this.storage.first);
};


