/*  B"H
*/
// Load the http module to create an http server.
const express = require('express')
const productsController = require('./controllers/products')
const usersController = require('./controllers/users'); // Import usersController
require('dotenv').config() // Load environment variables from .env file (you can give it a path if you want)

const PORT = process.env.PORT ?? 8000 //originally PORT was 8000

const app = express();

  app.use(express.json()) // This middleware parses the request body as JSON

//Controllers
//A controller is a function that handles the request and response objects.
//It is responsible for processing the request, interacting with the model, and sending the response back to the client.
app
  .get('/hello', (req, res) => {
    res.send('Hello New Paltz, NY!!!')
  })
  .use('/api/v1/products', productsController)
  .use('/api/v1/users', usersController)
  
  .use('/', express.static('dist')) //vue client uses dist

//Error handling middleware
//This middleware is used to handle errors that occur in the application.
app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    const message = err.message || 'Oops! Something went wrong.'
    const error = {
        status,
        message
    }
    //I could probably compress this code into one line in the error const 
    res.status(status).send(error)
})

// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Welcome to the best class at New Paltz - ${process.env.BEST_CLASS}
      Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')

/*
Asynchronous patterns in Node.js
1. Callbacks
  - These are functions that are passed as arguments to
    other functions and are executed after the completion 
    of the asynchronous operation.
  - An analogy to this is a waiter in a restaurant, who
    takes your order and brings you the food when it's 
    ready.

2. Pipelines
  - These are a series of functions that are executed in 
    sequence, where the output of one function is passed as 
    the input to the next function.
  - An analogy to this is a pipeline in a factory, where
    raw materials are processed through a series of 
    machines to produce a finished product.

3. Promises
  - These are objects that represent the eventual 
    completion (or failure) of an asynchronous operation 
    and its resulting value.
  - They tell you if the operation was successful or not.
  - An analogy to this is a delivery service, where you
    place an order and receive a tracking number. You can
    check the status of your order and know if it was
    delivered or not.

4. Async/Await
  - This is a syntactic sugar over promises that allows
    you to write asynchronous code in a synchronous 
    manner.
     - Syntactic Sugar is a term used in programming to refer to 
       syntax within a programming language that is designed 
       to make things easier to read or express.
  - An analogy to this is a chef in a restaurant, who
    prepares a dish and waits for it to be cooked before 
    serving it.
*/

/* Ways to send data to the server (understand these concepts):

1. PATH parameters: /users/123 (in express, it recognizes as :/users/:id)
2. Query parameters: ?name=John&age=30
3. Headers
  3.5 Cookies
4. Request body: { "name": "John", "age": 30 }
  4.0. Form data: name=John&age=30
  4.5. JSON data: { "name": "John", "age": 30 }
*/

/* Parts of a url
1. Protocol: http://
2. Domain: localhost
3. Port: :80 or :443
4. Path: /path/to/resource (ex. /api/v1/products) [express calls this a parameter]
5. Query parameters: ?name=John&age=30 (ampersand & separates multiple parameters)
6. URL parameters: /users/123
7. Fragment: #section1 (anything after the # (pound sign) is ignored by the server. It instead
                        is used by the browser to scroll to a specific part of the page. (or could be used for something else))

example: https://localhost:8000/api/v1/products?name=John&age=30#section1
*/

/*
Module Types
1. CommonJS:
  import: require('module')
  export: module.exports = { functions, variables, etc. }
2. ES6:
  import: import { functions, variables, etc. } from 'modules'
  export: export { functions, variables, etc. }
*/