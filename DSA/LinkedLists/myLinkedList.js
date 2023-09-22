// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode
        this.length++
        return this

    }
    printlist() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value){
        const newNode = new Node(value)
        for (let i = 0; i < this.length; i++){
            if(this[i] === index){
                this.prepend(newNode)
                this.head = newNode
                this.length++
            }



        }


    }

}

const myLinkedList = new LinkedList(10)
console.log(myLinkedList.append(5))
console.log(myLinkedList.append(16))
console.log(myLinkedList.prepend(100))
console.log(myLinkedList.insert(2,99))
console.log(myLinkedList.printlist())

console.log(myLinkedList)
