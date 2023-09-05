# What is good code?

1. Readable
2. Scalable
   - Speed
   - Memory

## 3 Pillars of code

- Memory

- Speed

- Readable

What is the space complexity of the algorithm below

```js
const booo = (n) => {
    for (let i = 0; i < n.length;i++){
        console.log('boooooo!');
    }
}

booo([1,2,3,4,5]) // 0(1)
```

This would be a space complexity of O(1). The more variables are assigned in the function the higher the space complexity is increased