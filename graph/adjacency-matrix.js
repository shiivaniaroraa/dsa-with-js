// How to wrtie code of Graph?
class Graph {
    constructor(noOfVertices) {
        this.adjacencyMatrix = [];
        this.noOfVertices = noOfVertices + 1;

        for (let i = 0; i < noOfVertices + 1; i++) {
            this.adjacencyMatrix[i] = new Array(noOfVertices + 1).fill(0);
        }
    }

    addEdge(vertex1, vertex2) {
        if (vertex1 >= 0 && vertex1 < this.noOfVertices && vertex2 >= 0 && vertex2 < this.noOfVertices) {
            this.adjacencyMatrix[vertex1][vertex2] = 1;
            this.adjacencyMatrix[vertex2][vertex1] = 1;
        }
    }

    removeEdge(vertex1, vertex2) {
        if (vertex1 >= 0 && vertex1 < this.noOfVertices && vertex2 >= 0 && vertex2 < this.noOfVertices) {
            this.adjacencyMatrix[vertex1][vertex2] = 0;
            this.adjacencyMatrix[vertex2][vertex1] = 0;
        }
    }

    printGraph() {
        for (let i = 0; i < this.adjacencyMatrix.length; i++) {
            console.log(`${i} => ${this.adjacencyMatrix[i].join(', ')}`);
        }
    }
}

function main() {
    const g = new Graph(4);

    console.log('-----------------INIT---------------');
    g.printGraph();

    console.log('-----------------ADD EDGE---------------');
    g.addEdge(1, 3);
    g.addEdge(2, 4);
    g.addEdge(4, 3);
    g.printGraph();

    console.log('-----------------REMOVE EDGE---------------');
    g.removeEdge(2, 4);
    g.printGraph();
}

main();

/*
OUTPUT

-----------------INIT---------------
0 => 0, 0, 0, 0, 0
1 => 0, 0, 0, 0, 0
2 => 0, 0, 0, 0, 0
3 => 0, 0, 0, 0, 0
4 => 0, 0, 0, 0, 0
-----------------ADD EDGE---------------
0 => 0, 0, 0, 0, 0
1 => 0, 0, 0, 1, 0
2 => 0, 0, 0, 0, 1
3 => 0, 1, 0, 0, 1
4 => 0, 0, 1, 1, 0
-----------------REMOVE EDGE---------------
0 => 0, 0, 0, 0, 0
1 => 0, 0, 0, 1, 0
2 => 0, 0, 0, 0, 0
3 => 0, 1, 0, 0, 1
4 => 0, 0, 0, 1, 0

*/
