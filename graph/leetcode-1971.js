function validPath(n: number, edges: number[][], source: number, destination: number): boolean {

    if (source === destination) return true;

    const graph = createGraph(edges);

    const visitedNodes = new Map();

    traverseDFSRecursion(graph, visitedNodes, source);

    return visitedNodes.has(destination);
};


const createGraph = (edges: number[][]) => {

    const graph = new Map();

    edges.forEach(([a, b]) => {
        if (graph.has(a) === false) {
            graph.set(a, new Set());
        }

        if (graph.has(b) === false) {
            graph.set(b, new Set());
        }

        graph.get(a).add(b);
        graph.get(b).add(a);
    });

    return graph;
};


const traverseBFS = (graph: Map<string, Set<number>>, visitedNodes: Map<number, boolean>, source: number) => {

    const queue = new Array();
    queue.push(source);

    visitedNodes.set(source, true);

    while (queue.length > 0) {
        const node = queue.shift();

        graph.get(node).forEach((n: number) => {
            if (visitedNodes.has(n) === false) {
                queue.push(n);
                visitedNodes.set(n, true);
            }
        });
    }
}


const traverseDFS = (graph: Map<string, Set<number>>, visitedNodes: Map<number, boolean>, source: number) => {

    const stack = new Array();
    stack.push(source);

    visitedNodes.set(source, true);

    while (stack.length > 0) {
        const node = stack.pop();

        graph.get(node).forEach((n: number) => {
            if (visitedNodes.has(n) === false) {
                stack.push(n);
                visitedNodes.set(n, true);
            }
        });
    }
}

const traverseDFSRecursion = (graph: Map<string, Set<number>>, visitedNodes: Map<number, boolean>, source: number) => {

    visitedNodes.set(source, true);

    function dfs(node) {
        graph.get(node).forEach((n: number) => {
            if (visitedNodes.has(n) === false) {
                visitedNodes.set(n, true);
                dfs(n);
            }
        });
    }

    dfs(source);
}


console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9));

/* 
Time complexity: O(V + E)
The time complexity of this solution is O(V + E), where V is the number of vertices and E is the number of edges in the graph. This is because we are performing a traversal of the graph, which visits each vertex and edge once.

Space complexity: O(V + E)
The space complexity is also O(V + E) because we are using a queue to store the vertices to be visited, a set to keep track of visited vertices, and a map to store the adjacency list of the graph.
*/
