// How to write a code of Graph?

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertextName) {
        this.adjacencyList.set(vertextName, new Array());
    }

    addEdge(vertex1, vertex2) {
        const v1 = this.adjacencyList.get(vertex1);
        v1.push(vertex2);

        const v2 = this.adjacencyList.get(vertex2);
        v2.push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        const v1 = this.adjacencyList.get(vertex1);
        let index = v1.indexOf(vertex2);
        v1.splice(index, 1);

        const v2 = this.adjacencyList.get(vertex2);
        index = v2.indexOf(vertex1);
        v2.splice(index, 1);
    }

    removeVertex(vertexName) {
        const v = this.adjacencyList.get(vertexName);

        while (v.length > 0) {
            const e = v.pop();

            const v2 = this.adjacencyList.get(e);
            const index = v2.indexOf(vertexName);
            v2.splice(index, 1);
        }

        this.adjacencyList.delete(vertexName);
    }

    printGraph() {
        const keys = this.adjacencyList.keys();

        for (let k of keys) {
            const values = this.adjacencyList.get(k);

            console.log(`${k} => ${values.join(', ')}`)
        }
    }
}

function main() {
    const g = new Graph();
    g.addVertex('A');
    g.addVertex('B');
    g.addVertex('C');
    g.addVertex('D');


    g.addEdge('A', 'B');
    g.addEdge('B', 'D');
    g.addEdge('A', 'C');
    g.addEdge('A', 'D');

    console.log('------------INIT------------');
    g.printGraph();

    console.log('------------DELETE EDGE------------');
    g.removeEdge('A', 'D');
    g.printGraph();

    console.log('------------DELETE VERTEX------------');
    g.removeVertex('C');

    g.printGraph();
}

main();


/* OUTPUT

------------INIT------------
A => B, C, D
B => A, D
C => A
D => B, A
------------DELETE EDGE------------
A => B, C
B => A, D
C => A
D => B
------------DELETE VERTEX------------
A => B
B => A, D
D => B


*/