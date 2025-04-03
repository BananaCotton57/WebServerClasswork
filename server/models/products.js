const data = require('../data/products.json')
const { CustomError, statusCodes } = require('./errors')

const isAdmin = true;

async function getAll() {
    return data
}

async function get(id){
    const item = data.items.find((item) => {
        return item.id == id
    })
    if (!item) {
        throw new CustomError('Item not found', statusCodes.NOT_FOUND)
    }
    return item
}

async function create(item){
    if(!isAdmin){
        throw new CustomError('You are not authorized to create a new item.', statusCodes.UNAUTHORIZED);
    }
    const newItem = {
        id: data.items.length + 1,
        ...item
    }
    data.items.push(newItem)
    return newItem
}

async function update(id, item){
    const index = data.items.findIndex((item) => {
        return item.id == id
    })
    if (index === -1) {
        return null
    }
    const updatedItem = {
        ...data.items[index],
        ...item
    }
    data.items[index] = updatedItem
    return updatedItem
}

async function remove(id){
    const index = data.items.findIndex((item) => {
        return item.id == id
    })
    if (index === -1) {
        return null
    }
    const deletedItem = data.items[index]
    data.items.splice(index, 1)
    return deletedItem
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
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