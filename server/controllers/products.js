/*  B"H
*/
const model = require('../models/products') //this imports the model
const express = require('express') //this imports the express library
const router = express.Router() //this is the express router

router
    .get('/', (req, res, next) => {

        model.getAll().then((data) => {
            res.send(data)
        }).catch(next) 
    })
        //This is a promise that resolves when the data is returned.
        //The catch method is used to handle any errors that may occur during the execution of the promise.
        //This is asynchronous code.

        /*
        model.getAll().then((data) => {
            res.send(data)
        }).catch(err -> {
            console.error(err)
            res.status(500).send('Internal Server Error')
        }) 
        */
        //This is a promise that resolves when the data is returned.
        //It is the same as the previous one, but it uses an arrow function to handle the error.
        //Usually used in synchronous code.
    
        .get('/:id', (req, res, next) => {
            const { id } = req.params
            model.get(id).then((data) => {
                res.send(data)
            }).catch(next)
        })

        .post('/', (req, res, next) => {
            const { name, price } = req.body
            model.create({ name, price }).then((data) => {
                res.send(data)
            }).catch(next)
        })

        .patch('/:id', (req, res, next) => {
            const { id } = req.params
            const { name, price } = req.body
            model.update(id, { name, price }).then((data) => {
                res.send(data)
            }).catch(next)
        })

        .delete('/:id', (req, res, next) => {
            const { id } = req.params
            model.remove(id).then((data) => {
                res.send(data)
            }).catch(next)
    })
    .get('/:id', (req, res, next) => {
        const { id } = req.params

        res.send({
            id,
            name: `Product ${id}`,
            price: 10.99 * id
        })
    })
    .post('/', (req, res, next) => {
        const { name, price } = req.body

        res.send({
            id: 4,
            name,
            price
        })
    })
    .patch('/:id', (req, res, next) => {
        const { id } = req.params
        const { name, price } = req.body

        res.send({
            id,
            name,
            price
        })
    })
    .delete('/:id', (req, res, next) => {
        const { id } = req.params

        res.send({
            message: `Product ${id} deleted`
        })
    })

module.exports = router