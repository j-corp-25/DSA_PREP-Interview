class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value) {
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                }else {
                    if(!currentNode.right) {
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
    lookup(value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root
        while(currentNode){
            if(value < currentNode.value) {
                currentNode = currentNode.left
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }else if (currentNode.value === value) {
                return currentNode
            }
        }
        return false
    }
    breadthFirstSearch
}
const tree = new BinarySearchTree()

console.log(tree.insert(9))
console.log(tree.insert(12))
console.log(tree.insert(8))
console.log(tree.insert(40))
console.log(tree.insert(20))
console.log(tree.insert(5))
console.log(tree.insert(11))

console.log(tree.lookup(12))


const traverse = (node) => {
    const tree = {value: node.value };
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right)
    return tree;
}
// console.log(tree.insert(12))
// console.log(tree.insert(5))
// console.log(tree)
