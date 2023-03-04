/** Node: node for a deque. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.previous = null;
    }
  }

/** Deque: chained-together nodes where you can
 *  remove from the top, add to the top,
 *  remove from bottom, add to bottom */


 




class Deque {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    // appendleft()
    // Add to beginning
    appendLeft(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first=newNode;
            this.last=newNode;
        } else {
            this.first.previous = newNode;
            newNode.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }
    // appendright()
    // Add to end
    appendRight(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first=newNode;
            this.last=newNode;
        } else {
            newNode.previous = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    // popleft()
    // Remove & return from beginning
    popLeft() {
        let removedNode = this.first;
        if (!removedNode) throw Error('Array is empty!')
        this.first = removedNode.next || null;
        this.size--;
        return removedNode.val;
    }
    // popright()
    // Remove & return from end
    popRight() {
        let removedNode = this.last;
        if (!removedNode) throw Error('Array is empty!')
        this.last = removedNode.previous || null;
        this.size--;
        return removedNode.val;
    }
    // peekleft()
    // Return (don’t remove) beginning
    peekLeft() {
        return this.first.val;
    }
    // peekright()
    // Return (don’t remove) end
    peekRight() {
        return this.last.val;
    }
    // isEmpty()
    // Are there items in the deque?
    isEmpty() {
        return this.size == 0 ? true : false;
    }
}

module.exports = Deque;