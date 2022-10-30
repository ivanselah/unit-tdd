const Stack = require('../stack');

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('initialize stack', () => {
    expect(stack.initStackSize).toBe(1);
  });

  describe('size', () => {
    it('before push', () => {
      expect(stack.size).toBeUndefined();
    });
    it('after push', () => {
      stack.push(1);
      expect(stack.size).toBe(1);
    });
  });

  describe('push', () => {
    it('if anything is in this stack', () => {
      const returnValue = stack.push(4);
      expect(returnValue).toBe(1);
    });
    it('if nothing is in this stack', () => {
      const returnValue = stack.push();
      expect(returnValue).toBe(0);
    });
  });

  describe('pop', () => {
    it('if anything is in this stack', () => {
      const pushedValue = 5;
      stack.push(5);
      const returnValue = stack.pop();
      expect(returnValue).toEqual(pushedValue);
    });
    it('if nothing is in this stack', () => {
      const returnValue = stack.pop();
      expect(returnValue).toBeUndefined();
    });
  });
});
