const data = require('../data/products.json')

function getAll() {
    return data
}

function get(id){
    data.find((item) => {
        return item.id == id
    })
}

function create(item){
    const newItem = {
        id: data.length + 1,
        ...item
    }
    data.push(newItem)
    return newItem
}

function update(id, item){
    const index = data.findIndex((item) => {
        return item.id == id
    })
    if (index === -1) {
        return null
    }
    const updatedItem = {
        ...data[index],
        ...item
    }
    data[index] = updatedItem
    return updatedItem
}

function remove(id){
    const index = data.findIndex((item) => {
        return item.id == id
    })
    if (index === -1) {
        return null
    }
    const deletedItem = data[index]
    data.splice(index, 1)
    return deletedItem
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
    
*/