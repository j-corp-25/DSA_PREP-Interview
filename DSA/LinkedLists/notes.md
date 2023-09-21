# Linked Lists

Linked lists are lists that are linked. A singly-linked lists are linked one way. The nodes have two elements, a value and a pointer that points to the next node. The first node is called the head and the last one is called the tail

If it points to null then its the tail node. Can contain any sort of data type,

A pointer is a reference to another place in memory, another object or another node.

```js
const obj1 = {a: true}
const obj2 = obj;
obj.a = 'boooya'
console.log('1', obj1);
console.log('2', obj2);
```

The above example shows how refencing/pointers work. We set up pointer to object 1 using object 2.

You can delete the original reference and if the pointer still remains without modifications it will still be referencing the original one.

A node is a bucket of data
