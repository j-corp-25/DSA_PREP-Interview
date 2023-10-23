# Traversing

## One of the main ways to search in a tree is Breath first search

- You start at the root node then move left to right at each node level
- It uses more memory because it needs to track all the child nodes

```javascript
//      9
//  4       20
//1   6   15  170
```

BFS[9,4,20,1,6,15,170]

## Another way is Depth first search

- uses less memory unlike BFS
- keeps visiting downwards to each children on the node level then goes back up when it reaches the end

```javascript
//      9
//  4       20
//1   6   15  170
```

DFS[9,4,1,6,20,15,170]

### Which one is better and what are the pros and cons?

- All traversal is O(n) because we are visiting each node

- BFS
    1 Pros: Shortest Path
    2 Pros: Closer Nodes
    3 Cons: More Memory

- DFS
    1 Pros: Less Memory
    2 Cons: Can take a while if its a big Tree or graph
