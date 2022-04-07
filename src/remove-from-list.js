const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
/* function removeKFromList(l, k) {
  throw new NotImplementedError('Not implemented');

} */




function removeKFromList(l, k) {
  
  class ListNode {
    constructor(x, next = null) {
      this.value = x;
      this.next = null;
    }
  }
  
  
  class Queue {
    constructor() {
      this.head = l;
    }
  
    getUnderlyingList() {
      return this.head
    }
  
    indexOf(x) {
      let curContext = this.head;
      let count = 0;
  
      while (curContext) {
        if (curContext.value === x) {
          return count;
        }
  
        curContext = curContext.next;
        count++;
      }
      return -1;
    }
  
    deleteIndex(x) {
      let curContext = this.head;
      let previous;
      let count = 0;
      let index = this.indexOf(x)
  
      if (index === 0) {
        this.head = curContext.next;
      } else {
        while (count < index) {
          count++;
          previous = curContext;
          curContext = curContext.next;
        }
        previous.next = curContext.next;
      }
    }
  
    dequeue(x) {
      while (this.indexOf(x) != -1) {
        this.deleteIndex(x)
      }
    }
  
  }
  const queue = new Queue()
  queue.dequeue(k);

 return queue.getUnderlyingList()

}




module.exports = {
  removeKFromList
};
