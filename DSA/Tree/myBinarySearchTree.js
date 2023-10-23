class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
    // if(this.root < value) {
    //     this.left = newNode

    // }else {
    //     this.right = newNode
    // }
    // this.length++
    // return this;
  }
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue,list)
  }
  DFSInorder() {
    return traverseInOrder(this.root,[])

  }
  DFSPostorder() {
    return traversePostOrder(this.root,[])

  }
  DFSPreorder() {
    return traversePreOrder(this.root,[])

  }
}
const traverseInOrder = (node, list) => {
    if(node.left){
        traverseInOrder(node.left,list)
    }
    list.push(node.value)
    if(node.right){
        traverseInOrder(node.right,list)
    }
    return list

}
const traversePreOrder = (node, list) => {
    list.push(node.value)
    if(node.left){
        traverseInOrder(node.left,list)
    }
    if(node.right){
        traverseInOrder(node.right,list)
    }
    return list

}
const tree = new BinarySearchTree();

console.log(tree.insert(9));
console.log(tree.insert(12));
console.log(tree.insert(8));
console.log(tree.insert(40));
console.log(tree.insert(20));
console.log(tree.insert(5));
console.log(tree.insert(11));
// console.log(tree.breadthFirstSearch())
// console.log(tree.breadthFirstSearchR([tree.root], []));
// console.log(tree.DFSInorder())
console.log(tree.DFSPreorder())

const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};
// console.log(tree.insert(12))
// console.log(tree.insert(5))
// console.log(tree)


//      9
//  4       20
//1   6   15  170

// you can return items in three ways with DFS
// Inorder [1,4,6,9,15,20,170]
// Preorder [9,4,1,6,20,15,170] - useful if you want to recreate a tree
// Postorder [1,6,4,15,170,20,9] -
