const express = require('express');
const router = express.Router();

const connectDB = require('../config/database.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/api/products', (req, res) => {
    const products = `SELECT * FROM products`;
    connectDB.query(products, (err, results) => {
        if(err) console.log(err)
        res.send(results);
        console.log(results);
    })
});

router.post('/api/products', (req, res) => {
    const { name } = req.body;

    const product = `INSERT INTO products(name)
                    VALUES('${name}')`;
    connectDB.query(product, (err, results) => {
        if(err) console.log(err)
        res.send(results);
    })
})


router.get('/api/products/last', (req, res) => {
    const product = `SELECT * FROM products ORDER BY id DESC
                    LIMIT 1`
    connectDB.query(product, (err, results) => {
        if(err) console.log(err)
        res.send(results);
        console.log(results);
    })                
}) 

router.delete('/api/products/delete/:id', (req, res) => {
    const product = `DELETE FROM products WHERE id = ${req.params.id}`;
    connectDB.query(product, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

module.exports = router;