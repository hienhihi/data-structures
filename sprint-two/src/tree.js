var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Node(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      } else if (this.children[i].children.length > 0) {
        scanChild(this.children[i], target);
      }
    }
  }
  return false;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.children = [];

  return node;
};

var scanChild = function(node, target) {
  for (var j = 0; j < node.length; j++) {
    if (node.value === target) {
      return true;
    } else if (node.children.length > 0) {
      scanChild(node.children[j], target);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */