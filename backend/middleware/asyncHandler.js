// asyncHandler function accepts a function fn as an argument and returns a new function with the following behavior:

// 1. It wraps the fn function with a Promise, converting it to an asynchronous function if it's not already.

// 2. It calls the fn function with the req, res, and next arguments, wrapping the result in a resolved Promise.

// 3. If the fn function throws an error, the error is caught and passed to the next function, which can then be handled by an error-handling middleware.

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
