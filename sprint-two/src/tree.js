var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return true;
      } else if (this.children[i].children.length > 0) {
        for (var j = 0; j < this.children[i].children.length; j++) {
          if (this.children[i].children[j].contains(target)) {
            return true;
          }
        }        
      }
    }
  }
  return false;
};
