const port = 3003
const db = require('./database.js')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => {
    res.send(db.getProducts())
    next()
})

app.get('/products/:id', (req, res, next) => {
    res.send(db.getProduct(req.params.id))
})

app.get('/products', (req, res, next) => {
    res.send({ name: 'Car', price: 60000 })
})

app.post('/products', (req, res, next) => {
    const p = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(p)
})

app.delete('/products/:id', (req, res, next) => {
    const p = db.deleteProduct(req.params.id)
    res.send(p)
})

app.listen(port, () => {
    console.log(`Serving HTTP on 0.0.0.0 port ${port} ...`)
})
