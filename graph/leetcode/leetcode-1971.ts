/**
Approach:

1) Create an Adjacency List:

    => Convert the given array of edges into an adjacency list representation of the graph.
    => This helps in efficiently representing and traversing the graph.


2) Check Path Existence:

    => Use a breadth-first search (BFS) approach to check if there exists a path from the source node to the destination node.
    => Start with the source node and explore its neighbors level by level.
    => Keep track of visited nodes to avoid revisiting them.
    => If the destination node is reached during the BFS traversal, return true, indicating that a path exists.
    => If all reachable nodes are explored and the destination node is not found, return false, indicating that no path exists.

3) Detailed Steps:
    A) Create Adjacency List:

        => Initialize an empty adjacency list representation of the graph.
        => Iterate through the given array of edges.
        => For each edge [a, b], add b to the adjacency list of a, and vice versa (since it's an undirected graph).
        => Ensure that each node is added to the adjacency list even if it doesn't have any neighbors.

    B) Check Path Existence (BFS):

        => Initialize a queue and a visited array.
        => Enqueue the source node into the queue and mark it as visited.
        => While the queue is not empty:
            a) Dequeue a node from the queue.
            b) If the dequeued node is the destination, return true.
            c) Otherwise, enqueue all unvisited neighbors of the dequeued node into the queue and mark them as visited.
        => If the destination node is not reached after exploring all reachable nodes, return false.

4) Return Result:

    => After BFS traversal, if the destination node is reached, return true.
    => If the destination node is not reached, return false.


Time Complexity:
    => Creating the adjacency list: O(E), where E is the number of edges.
    => BFS traversal: O(V + E), where V is the number of vertices and E is the number of edges.
    => Overall time complexity: O(V + E), where V is the number of vertices and E is the number of edges.

This approach efficiently determines whether there exists a path between the given source and destination nodes in the graph.
*/

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;

  const graph = createGraph(edges);

  const visitedNodes = new Map();

  traverseDFSRecursion(graph, visitedNodes, source);

  return visitedNodes.has(destination);
}

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

const traverseBFS = (
  graph: Map<string, Set<number>>,
  visitedNodes: Map<number, boolean>,
  source: number
) => {
  const queue = new Array();
  queue.push(source);

  visitedNodes.set(source, true);

  while (queue.length > 0) {
    const node = queue.shift();
    const edge = graph.get(node);

    if (edge && edge.size) {
      edge.forEach((n: number) => {
        if (visitedNodes.has(n) === false) {
          queue.push(n);
          visitedNodes.set(n, true);
        }
      });
    }
  }
};

const traverseDFS = (
  graph: Map<string, Set<number>>,
  visitedNodes: Map<number, boolean>,
  source: number
) => {
  const stack = new Array();
  stack.push(source);

  visitedNodes.set(source, true);

  while (stack.length > 0) {
    const node = stack.pop();
    const edge = graph.get(node);

    if (edge && edge.size) {
      edge.forEach((n: number) => {
        if (visitedNodes.has(n) === false) {
          stack.push(n);
          visitedNodes.set(n, true);
        }
      });
    }
  }
};

const traverseDFSRecursion = (
  graph: Map<string, Set<number>>,
  visitedNodes: Map<number, boolean>,
  source: number
) => {
  visitedNodes.set(source, true);

  function dfs(node) {
    const edge = graph.get(node);

    if (edge && edge.size) {
      edge.forEach((n: number) => {
        if (visitedNodes.has(n) === false) {
          visitedNodes.set(n, true);
          dfs(n);
        }
      });
    }
  }

  dfs(source);
};

console.log(
  validPath(
    10,
    [
      [4, 3],
      [1, 4],
      [4, 8],
      [1, 7],
      [6, 4],
      [4, 2],
      [7, 4],
      [4, 0],
      [0, 9],
      [5, 4],
    ],
    5,
    9
  )
);

/**
Time complexity: O(V + E)
The time complexity of this solution is O(V + E), where V is the number of vertices and E is the number of edges in the graph. This is because we are performing a traversal of the graph, which visits each vertex and edge once.

Space complexity: O(V + E)
The space complexity is also O(V + E) because we are using a queue to store the vertices to be visited, a set to keep track of visited vertices, and a map to store the adjacency list of the graph.
*/
