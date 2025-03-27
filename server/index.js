/*  B"H
*/
// Load the http module to create an http server.
const express = require('express')
const productsController = require('./controllers/products')

const PORT = 8000

const app = express();

app
  .get('/', (req, res) => {
    res.send('Hello New Paltz, NY!!!')
  })
  .use('/api/v1/products', productsController)

// Listen on port 8000, IP defaults to
//
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
});



console.log('Hello World!')

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