// use queue system
// enqueue starting pos as node into queue
// while queue isn't empty:
//  dequeue
//  check dequeued node
//  enqueue valid moves as nodes into queue
//  save new nodes into (maybe) an object and use .hasOwn for later to see if nodes can be ignored.
//  *this is safe because if it's already saved, then it's reached its fastest possible
