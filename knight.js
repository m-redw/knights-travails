// use queue system
// enqueue starting pos as node into queue
// while queue isn't empty:
//  dequeue
//  check dequeued node
//  enqueue valid moves as nodes into queue
//  save new nodes into (maybe) an object and use .hasOwn for later to see if nodes can be ignored.
//  *this is safe because if it's already saved, then it's reached its fastest possible

// use set instead of object. only have to insert value, not key:value.
// set also includes some useful methods (add & has).

class Node {
  constructor(square, prevNode = null) {
    this.square = square;
    this.prevNode = prevNode;
  }
}

export function knightMoves(startingPos, destination) {
  const startingNode = new Node(startingPos);

  let queue = [];
  const visited = new Set();

  queue.push(startingNode);
  //stringify cuz obj references will be compared if array === array, not content
  visited.add(startingNode.square.toString());

  let traversalNode = findDestinationAndPaths();
  let toDest = [traversalNode.square];

  while (traversalNode.prevNode) {
    toDest.push(traversalNode.prevNode.square);
    traversalNode = traversalNode.prevNode;
  }

  return toDest.reverse();

  // helper funcs
  function newValidMove(square, prevNode) {
    const newNode = new Node(square, prevNode);
    queue.push(newNode);
    visited.add(newNode.square.toString());
  }

  function checkValid(square) {
    return checkBounds(square) && checkVisisted(square);
  }

  function checkBounds(square) {
    if (square[0] < 0 || square[0] > 7) return false;
    if (square[1] < 0 || square[1] > 7) return false;

    return true;
  }

  function checkVisisted(square) {
    if (visited.has(square.toString())) {
      return false;
    }
    return true;
  }

  function findDestinationAndPaths() {
    while (queue.length > 0) {
      const currNode = queue.shift();
      const currSquare = currNode.square;

      if (currSquare.toString() === destination.toString()) {
        return currNode;
      }

      const x = currSquare[0];
      const y = currSquare[1];

      if (checkValid([x - 1, y - 2])) {
        newValidMove([x - 1, y - 2], currNode);
      }
      if (checkValid([x - 2, y - 1])) {
        newValidMove([x - 2, y - 1], currNode);
      }
      if (checkValid([x + 1, y - 2])) {
        newValidMove([x + 1, y - 2], currNode);
      }
      if (checkValid([x + 2, y - 1])) {
        newValidMove([x + 2, y - 1], currNode);
      }
      if (checkValid([x + 1, y + 2])) {
        newValidMove([x + 1, y + 2], currNode);
      }
      if (checkValid([x + 2, y + 1])) {
        newValidMove([x + 2, y + 1], currNode);
      }
      if (checkValid([x - 1, y + 2])) {
        newValidMove([x - 1, y + 2], currNode);
      }
      if (checkValid([x - 2, y + 1])) {
        newValidMove([x - 2, y + 1], currNode);
      }
    }
  }
}
