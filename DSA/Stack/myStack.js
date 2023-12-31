
// LINK LIST IMPLEMENTATION OF STACKS
//LIFO
class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
        }else {
            const holdingPointer = this.top;
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this;

    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const holdingPointer = this.top
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const myStack = new Stack()
console.log(myStack.push('google'))
console.log(myStack.push('udemy'))
console.log(myStack.push('youtube'))
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())

//Using ARRAYS

// class Node {
//     constructor(value){
//         this.value = value,
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//    this.array = []
//     }
//     peek(){
//         return this.array[this.array.length -1]
//     }
//     push(value){
//         this.array.push(value)
//         return this;

//     }
//     pop(){
//        this.array.pop();
//         return this;
//     }
// }
// const myStack = new Stack();
// console.log(myStack.peek())
// console.log(myStack.push(5))
// console.log(myStack.peek())
// console.log(myStack.pop())
