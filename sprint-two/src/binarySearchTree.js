var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);
  bst.value = value;
  bst.left = null;
  bst.right = null;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (value < this.value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else if (value < this.value) {
    this.left.insert(value);
  }
  if (value > this.value && this.right === null) {
    this.right = BinarySearchTree(value);
  } else if (value > this.value) {
    this.right.insert(value);
  }
};

bstMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target < this.value && this.left !== null) {
    return this.left.contains(target);
  } else if (target > this.value && this.right !== null) {
    return this.right.contains(target);
  }
  return false;
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
