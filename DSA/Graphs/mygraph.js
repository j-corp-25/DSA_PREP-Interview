// //Edge List

// const graph = [[0,2],[2,3],[2,1],[1,3]]


// // Adjacent List

// const grapgh = [[2], [2,3], [0,1,3], [1,2]]

// //Adjacent Matrix

// const graph = [
//     [0,0,1,0],
//     [0,0,1,1],
//     [1,1,0,1],
//     [0,1,1,0],
// ]

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentLsit = {};

    }
    addVertex(node) {
        this.adjacentLsit[node] = [];
        this.numberOfNodes++

    }
    addEdge(node1, node2) {
        this.adjacentLsit[node1].push(node2)
        this.adjacentLsit[node2].push(node1)

    }
    showConnections() {

    }
}
