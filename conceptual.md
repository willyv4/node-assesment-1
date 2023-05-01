### - What are some ways of managing asynchronous code in JavaScript?

Nested callbacks were the intial approach at sorking with async JS, which were difficult to read and led to callback hell.
Promises were next which introduced a more readable and manageable syntax for handling asynchronous code.
Async/await is current which builds upon Promises and provides a more concise and readable way to handle asynchronous code.

-

### - What is a Promise?

a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and it allows you to handle the result of that operation when it becomes available.

Promises have three states:

Pending: The initial state of a Promise before it has completed or failed.
Fulfilled: The state of a Promise when it has successfully completed.
Rejected: The state of a Promise when it has failed.

-

### - What are the differences between an async function and a regular function?

Functions are essential building blocks in programming, which encapsulate a specific piece of functionality that can be called from other parts of the program. These functions execute synchronously, meaning that they run one after another in a linear fashion. Once one function completes its execution, the next function in the program is called, and so on.

An async function, on the other hand, is a type of function that allows you to write asynchronous code in a synchronous style. Async functions always return a Promise and allow you to use the await keyword to wait for Promises to resolve before continuing with the execution of the function. This means that an async function can pause its execution while it waits for an asynchronous operation to complete, without blocking the rest of the program.

-

### - What is the difference between Node.js and Express.js?

Node.js is a server-side JavaScript runtime environment, which enables developers to execute JavaScript code on the Back-End. Express.js, on the other hand, is a lightweight framework that runs on top of Node.js. It provides additional features and functionality that help developers build web applications more easily and efficiently, such as routing, middleware, and template engines.

-

### - What is the error-first callback pattern?

The error-first callback pattern is a convention used in JavaScript for handling errors in asynchronous functions with callbacks. It involves passing an error object as the first argument to the callback, and the result as the second argument. This pattern provides a consistent and predictable way to handle errors in asynchronous code.

-

### - What is middleware?

In Node.js, middleware is a software component that sits between the client and the server, intercepting and modifying incoming requests and outgoing responses. It can be used to perform various functions, such as logging, authentication, input validation, error handling, and more. Middleware functions in Node.js are typically defined as functions that take three arguments: the request object (req), the response object (res), and the next function in the application's request-response cycle.

-

### - What does the `next` function do?

the next function ensures that subsequent middleware functions are executed in the correct order and that the request-response cycle continues as expected. If a middleware function does not call next, the request will be left hanging, and the response will not be sent back to the client. Additionally, the next function can be used to handle errors by passing them down the middleware chain until they are caught by an error-handling middleware function or the default error handler in Node.js.

-

### - What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

- Performance is slow due to awaiting res one after another
- Structure could be improved by using map and an arr of usernames rather awaiting several api calls
- user Promise.all to await the results
- naming could be users to reflect function's intention.

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}

// my version
async function getUsers() {
  const userNames = ["elie", "joelburton", "mmmaaatttttt"];
  const userPromises = userNames.map((userName) =>
    $.getJSON(`https://api.github.com/users/${userName}`)
  );
  const users = await Promise.all(userPromises);

  return users;
}
```
