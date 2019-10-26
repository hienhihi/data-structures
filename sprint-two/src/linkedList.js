var LinkedList = function() {
  var list = {};
  var current;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      current = Node(value);
      list.head = current;
      list.tail = current;
    }
    current.next = Node(value);
    current = Node(value);
    Node.next = current;
    list.tail = current;
  };

  list.removeHead = function() {
    var res = list.head;
    list.head = Node.next;
    return res.value;
  };

  list.contains = function(target) {
    // create variable and set to head, if var !== target, assign var to the node next to it. when we reach tail. return false
    // reach to tail means .next === this value.
    var test = list.head;
    while (test.next !== null) {
      if (test.value === target) {
        return true;
      }
      test = Node.next;
      if (test.next === null) {
        if (test.value === target) {
          return true;
        }
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
