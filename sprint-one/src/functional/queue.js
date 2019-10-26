var Queue = function() {
  var someInstance = {};
  var size = 0;
  var first = 0;
  // var last = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size ++;
  };

  someInstance.dequeue = function() {
    var res = storage[first];
    delete storage[first];
    first++;
    return res;
  };

  someInstance.size = function() {
    return ( size - first < 0) ? 0 : Math.max( size - first);
  };

  return someInstance;
};
