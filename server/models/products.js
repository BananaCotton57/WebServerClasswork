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