var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var res = storage[size - 1];
    delete storage[size - 1];
    size--;
    return res;
  };

  someInstance.size = function() {
    return size < 0 ? 0 : size;  
  };

  return someInstance;
};
