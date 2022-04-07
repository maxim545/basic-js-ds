const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


 class Stack {

  constructor() {
    this.item = []
    this.size = 0
  }
  push(element) {
    this.item[this.size] = element
    this.size++
    return this.item
  }

  pop() {
    if (this.size === 0) return undefined
    let deletedEl = this.item[this.size-1]
    this.size--
    return deletedEl
  }

  peek() {
    return this.item[this.size-1]
  }
}

const stack = new Stack();




module.exports = {
  Stack
};
