class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    // this.count = 1
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined; // or can increase count
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else return true;
    }
    return false;
  }
  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  // Breadth First Search
  bFS() {
    let currentNode = this.root;
    let queue = [];
    let results = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return results;
  }

  // Depth First Search: PreOrder
  dFSPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
  // Depth First Search: PostOrder
  dFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  // Depth First Search: InOrder
  dFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

console.log(myTree);
console.log(myTree.contains(10));
console.log(myTree.contains(1));
console.log(myTree.minValueNode(myTree.root));
console.log(myTree.minValueNode(myTree.root.right));
console.log("Breadth First Search");

console.log(myTree.bFS());
console.log("Depth First Search: PreOrder");
console.log(myTree.dFSPreOrder());
console.log("Depth First Search: PostOrder");
console.log(myTree.dFSPostOrder());
console.log("Depth First Search: InOrder");
console.log(myTree.dFSInOrder());
