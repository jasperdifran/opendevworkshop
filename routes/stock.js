const express = require('express')
const stockRouter = express.Router()
const db = require('../db')
const fs = require('fs/promises')

stockRouter.get('/', (req, res) => {
    res.send('This is the stock route')
})

stockRouter.get('/:name', (req, res) => {
    for (i in db) {
        if (db[i].name === req.params.name) {
            res.send(db[i])
            return;
        }
    }
})

stockRouter.post('/addItem', (req, res) => {
    db.push(req.body)
    fs.writeFile('./db.json', JSON.stringify(db))
    res.send('Item added')
})


module.exports = stockRouter