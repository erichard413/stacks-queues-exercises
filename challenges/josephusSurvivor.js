// Josephus Survivor
// This is a classic algorithm problem, based on a Biblical-era tale.

// Imagine a group of 10 people in a circle, numbered 1 to 10. If we started at the first person (#1) and killed every three people, it would look like this:

// 1  2  3  4  5  6  7  8  9  10
//       !        !        !
// This continues, though, looping around again, starting with where we left of at #10 (we’ll mark the freshly-removed as red/! and the previously-removed in striked-out gray/X):

// 1  2  3  4  5  6  7  8  9  10
//    !  X        X  !     X
// And again, starting where that left off, at #8, and continuing:

// 1  2  3  4  5  6  7  8  9  10
// !  X  X        X  X  !  X

// 1  2  3  4  5  6  7  8  9  10
// X  X  X     !  X  X  X  X

// 1  2  3  4  5  6  7  8  9  10
// X  X  X     X  X  X  X  X  !
// At this point, only #4 remains, so that person would be our “survivor”.

// Write an algorithm that, given a number of people, and the “skip”, which person will be the survivor.

// For example:

// find_survivor(10, 3) // 4
// There are different ways you can solve this, but a good solution uses one of the structures covered in this exercise.

// Want a hint on the data structure?

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.previous = null;
    }
  }

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.size == 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            newNode.previous = this.last;
            this.last = newNode;
            this.last.next = this.first;
            this.first.previous = this.last;
        }
        this.size++;
    }
    kill(node){
        let prevNode = node.previous;
        let nextNode = node.next;
        nextNode.previous = node.previous;
        prevNode.next = nextNode;
        this.size--;
        return node.next;
    }

}

const find_survivor = (numPeople=10, every=3) => {
    let list = new LinkedList;
    for (let i = 1; i <= numPeople; i++) {
        list.push(i);
    }
    let startingNode = list.first;
    while (list.size > 1) {
        let removedNode = startingNode;
        for(let i=1;i<every;i++){
            removedNode = removedNode.next; 
        }
        startingNode = removedNode.next;
        list.kill(removedNode);
    }
    return startingNode.val;
}

module.exports = find_survivor;