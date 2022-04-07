const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class ListNode {
  constructor(x, next = null) {
    this.value = x;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head
  }
  enqueue(x) {
    let curContext;
    if (this.head === null) {
      this.head = new ListNode(x, this.head)
    }
    else {
      curContext = this.head
      while (curContext.next != null) {
        curContext = curContext.next;
      }
      curContext.next = new ListNode(x, this.head)
    }
  }

  dequeue() {
    let first = null
    if (this.head === null) {
      return first;
    }
    else {
      first = this.head.value
    }
    this.head = this.head.next;
    return first;

  }

}
const queue = new Queue()

module.exports = {
  Queue
};
