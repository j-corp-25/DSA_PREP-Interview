# What is good code?

1.  Scalable

2.  Readability

![BigONotation](/Snips/Big_O.png)

When we grow bigger and bigger with the amount of input how much does the performance of the algorithm changes?

Does it slow down? Does it speed up?

__We can calculate it by counting the amount of operations in the algorithm that it has to go through__

> Linear Time
![LinearTime](/Snips/LinearTime.png)

This is linear time O(n) meaning that the more elements we have the more operations we would also have. So if we have 1000 elements of `n` would also perform 1000 operations. In other words the operations increase at the same rate the elements increase.


![ConstantTimeFunction](/Snips/ConstantTime.png)

For the function above no matter how many boxes are inside 'boxes' the operation would only happen once which is constant time.

> Constant Time
![ConstantTimeGraph](/Snips/ConstantTimeGraph.png)

This means that more elements wont affect how many operations the algorithm would need to do

```js
function anotherFunChallenge(input) {
    let a = 5;
    let b = 10;
    let c = 50;
    for (let i = 0; i < input; i++) {
      let x = i + 1;
      let y = i + 2;
      let z = i + 3;

    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;
      let q = j * 2;
    }
    let whoAmI = "I don't know";
  }

```

The function above would be a n^2 example because there are two loops and each loop would be O(n) and having two would mean n * n equalling n^2
