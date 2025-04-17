const data = require('../data/products.json')
const { CustomError, statusCodes } = require('./errors') 
//this imports the CustomError and statusCodes from the errors.js file
//the require() is a built-in function in Node.js that is used to import modules.
const { connect } = require('./supabase') //this imports the connect function from the supabase.js file

const TABLE_NAME = "products" //this is the name of the table in the database


const isAdmin = true;

async function getAll() {
    const list = await connect().from(TABLE_NAME).select('*') //this selects all the columns from the table
    if(list.error) {
        throw error //throws a generic error if there is an error
    }
    return {
        items: list.data,
        total: list.count
    } // we changed this to return the data from the database
}

async function get(id){
    const { data: item, error} = await connect().from(TABLE_NAME).select('*').eq('id', id) //this selects all the columns from the table where the id is equal to the id [.eq('id', id)] passed in
    //originally was data.items.find((item) => item.id == id)
    if (!item) {
        throw new CustomError('Item not found', statusCodes.NOT_FOUND)
    }
    if (error) {
        throw error
    }
    return item
}

async function search(query){
    const { data: items, error } = await (await connect().from(TABLE_NAME).select('*'))
    .or('title.ilike.%$[query]%,description.ilike.%$[query]%') //this selects all the columns from the table where the name is like the query passed in
    //ilike is a case-insensitive version of like
    //like means that it will match the query with the name
    //originally was data.items.find((item) => item.id == id)
    if (error) {
        throw error
    }
    return items
}

async function create(item){
    if(!isAdmin){
        throw new CustomError('You are not authorized to create a new item.', statusCodes.UNAUTHORIZED);
    }
    const { data: newItem, error } = await connect().from(TABLE_NAME).insert(item) //this inserts the item into the table
    if (error) {
        throw error
    }
    return newItem
}

async function update(id, item){
    if(!isAdmin){
        throw new CustomError('You are not authorized to update this item.', statusCodes.UNAUTHORIZED);
    }
    const { data: updatedItem, error } = await connect().from(TABLE_NAME).update(item).eq('id', id) //this updates the item in the table
    if (error) {
        throw error
    }
    return updatedItem
}

async function remove(id){
    if(!isAdmin){
        throw new CustomError('You are not authorized to delete this item.', statusCodes.UNAUTHORIZED);
    }
    const { data: deletedItem, error } = await connect().from(TABLE_NAME).delete().eq('id', id) //this deletes the item from the table
    if (error) {
        throw error
    }
    return deletedItem
}

//A seed function is used to populate the database with initial data.
//This is useful for testing and development purposes. 
async function seed() {
    const { data: items, error } = await connect().from(TABLE_NAME).insert(data) //this inserts the data into the table
    if (error) {
        throw error
    }
    return items
}

module.exports = {
    getAll,
    get,
    search,
    create,
    update,
    remove,
    seed
}

// CRUD functions above (CRUD stands for Create, Read, Update, Delete)
// In other words, these functions are used to create, read, update, and delete data. Basic functions
// for any application.

/* Asynchronous programming vs Synchronous programming
    1. Synchronous programming: code is executed line by line, in order.
    2. Asynchronous programming: code is executed in parallel, without waiting for the previous line to finish.

    Pros of Synchronous programming:
    1. Easier to read and understand.
    2. Easier to debug.
    3. Easier to maintain.
    4. Easier to test.

    Cons of Synchronous programming:
    1. Slower.
    2. Blocks the main thread.
    3. Can cause performance issues.
    4. Can cause deadlocks.

    Pros of Asynchronous programming:
    1. Faster.
    2. Non-blocking.
    3. Can handle multiple requests at the same time.
    4. Can improve performance.
    5. Can improve user experience.
    6. Can improve scalability.

    Cons of Asynchronous programming:
    1. Harder to read and understand.
    2. Harder to debug.
    3. Harder to maintain.
*/