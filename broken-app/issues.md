# Broken App Issues

1. <strong>Use of primitive JavaScript:</strong> The original code uses var to declare variables, which is not recommended in modern JavaScript. Instead, it is better to use let or const to declare variables.

2. <strong>axios library is not imported properly.</strong> It should be imported like this: const axios = require('axios');.

3. <strong>The results variable is an array of promises:</strong> this needs to be resolved before using it to create the output. Using Promise.all() to wait for all the promises to resolve before creating the output is a better solution.

4. <strong>Improper handling of errors:</strong> The try-catch block in the original code only catches errors thrown inside the map function. If an error occurs outside of the map function, it will not be caught. Additionally, the catch block does not receive any arguments, making it difficult to determine the cause of the error.

5. <strong>Lacks the ability to handle any JSON data:</strong> The original code did handle JSON properly adding this app.use(express.json()); and returning res.json() enables the response to be JSON.

6. <strong>Data output was incorrect:</strong> The original code's output data was incorrect. name came before bio.

7. <strong>Poor naming:</strong> The original code uses unclear variable names such as "d", "out", and "r". Using descriptive variable names can make the code easier to read and maintain.
