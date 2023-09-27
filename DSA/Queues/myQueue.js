// LL IMPLEMENTATION OF QUEUE

class Node {
    constructor(value){
        this.value = value,
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }

    peek() {
        return this.first;

    }
    enqueue(value) {
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
        }else {
            const holdingPointer = this.first;
            this.first = newNode
            this.first.next = holdingPointer
        }
        this.length++
        return this;

    }
    dequeue(){

    }

}

const myQueue = new Queue()
console.log(myQueue.enqueue("John"))
console.log(myQueue.enqueue("Salome"))
console.log(myQueue.enqueue("Jordy"))
console.log(myQueue.enqueue("Elizabeth"))
console.log(myQueue.peek())
