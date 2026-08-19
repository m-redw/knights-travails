# knights-travails

## Goal:

Create a function "...that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop along the way" (Odin Project).

## Some background:

Before I started this project, I had just completed the binary search tree project. That project was still fresh in my mind since I finished it just 2 days prior, so when I first tackled this project, the first idea that came to mind was using a BST.
I wanted to use a node class and have its branches be possible moves the knight could make. I wanted to use the branches as paths and use a DFS approach to go from the root to the leaf (destination) to get the shortest path. 
However, I spent a lot of time going back and forth between a BFS approach and a DFS approach because I was really hung up on which of the two would be less tedious, but ultimately, I came up with the following.

### Idea 1 (NOT solution)

This idea involved a node class and a form of traversal (I didn't think of what at the time but probably a while loop).

Basically, a node would comprise of a coordinate, possibleMoves, and parent properties.

- coordinate would be the [x,y] for a square
- possibleMoves would be an array that contains all possible moves (nodes with coords to visitable squares) that extend off the current node
- parent would be used for backtracking

I would go through the possibleMoves array and individually check for more possibleMoves for those indivual nodes.

This would go on until all possible moves were made or the destination was reached.

At the end, I would use DFS to find the shortest possible route by checking depths. The shortest depth was the shortest/quickest path, and the node's parent was used to backtrack and return the answer as an array.

This idea seemed fine at the time, but it seemed **tedious**.
**I really thought there was a better idea**, which after some thinking, and some hints from the internet and AI, I came up with the 2nd idea.

### Idea 2 (solution)

Starting off, let me admit it, I looked up online the usage/importance of BFS and DFS for knight traversal.

I then went to Gemini and gave it my thoughts regarding the 1st idea and **asked for ZERO answers/code**. I only wanted to be told if my approach was ***alright*** and if Gemini could knudge me in the right direction. 

My 1st idea had its flaws.
- It lacked any prevention measures for endless checks ([0,0] -> [2,1] -> [0,0] -> [2,1]...)
- The idea of using a possibleMoves array was in fact **tedious**. I should just use BFS.

With BFS, I could just do the following:

1. Check the node that was popped from the queue.
2. If it was equal to the destination, return the node.
3. If not, check all possible moves (visitable squares) and enqueue them as nodes to the queue.
4. Repeat.

*Checking included seeing if a square's coords was within range (0-7) on both the x and y axis **AND** if the square was already visited. I used a set instead of an object to track visited nodes because I recently learned they are basically the same things except sets only need a value, not a key:value pair. Sets also have a has() and add() method, which made using them easier.*

This BFS approach utilized the idea that you only need to check **new/unvisited squares**.

If a path visited the square [1,2] already, but another path way later visits [1,2] again, it'll be pointless. The [1,2] square will already have its own possible moves checked, so if the destination was reached from [1,2], we would know the faster approach would be the 1st path anyway, not the path that happens way later.

Knowing those 2 flaws and the niceness of using BFS for checking knight movement, I came up with the following psuedocode in knight.js.

```javascript
// use queue system
// enqueue starting pos as node into queue
// while queue isn't empty:
//  dequeue
//  check dequeued node
//  enqueue valid moves as nodes into queue
//  save new nodes into (maybe) an object and use .hasOwn for later to see if nodes can be ignored.
//  *this is safe because if it's already saved, then it's reached its fastest possible
```

Afterwards, it was pretty smooth sailing.
I created a node class cuz I still needed one. This time however, it just has 2 properties: square (coords), and prevNode.

I also, like mentioned in checking, used sets instead of objects to check for visited squares.

## Closing thoughts

The code/implementation was pretty easy. I got it done in 1-2 hours and I only encountered a few bugs that took a few minutes in total to fix.

The **main** issue that I faced was ultimately the algorithm. How should I use BFS? Should I instead use DFS? I spent a majority of my morning thinking of this, other approaches, and my first idea, only for it to have it flaws and for me to bascially look up hints.

I'm happy that I got this seemingly hard project done, but I'm not fully satisfied. I know I learned a lot from this (i.e. sets, BFS, importance of psuedocode, etc), but I feel like it would've felt so much more rewarding if I spent more time coming up with the 2nd idea myself fully.

*But imma be honest, I don't know if I could've come up/understood some of the ideas like the visited nodes without looking them up.*