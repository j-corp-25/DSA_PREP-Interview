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

### Pop Questions

If you know a solution is not far from the root of the tree:
    - BFS
        - It starts searching the closest node to the parent

If the tree is very deep and solutions are are:
    - DFS nope
    - BFS: DFS will take a very long time if its deep

If the tree is very wide:
    - BFS(nope)
    - DFS: BFS will take too much memory to get across so DFS is a better option

If solutions are frequent but located deep in the tree:
    - DFS

Determining whether a path exists between two nodes:
    - DFS

Finding the shortest path:
    - BFS

### BFS

### Shortest Path Question on a weigthed gragh

We have the option for Dijkstra Algo and Bellman

- Dijkstra is good for weighted graphs that are weighted but dont have negative weights when it coms to finding the shortest path.

- Bellman is good for shortest path on a weigthed graph that has negative weigths

### DFS

- Really good to check if node exists
- Really good for mazes
- 
