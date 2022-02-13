const express = require('express');
const router = express.Router();

const connectDB = require('../config/database.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/api/labels', async  (req, res) => {
    const sql = `SELECT * FROM labels`
    connectDB.query(sql, (err, results) => {
        if(err) console.log(err);
        res.send(results);
    });
});


router.post('/api/labels', (req, res)  => {
    const {name, product_id} = req.body;
    console.log(req.body)
    let sql = ` INSERT INTO labels(name, product_id)
                    VALUES('${name}', '${product_id}')`;

    connectDB.query(sql, (err, results) => {
        if(err) throw err
        res.send('label registered');
    });
})

router.get('/api/labels/:product_id', (req, res) => {
    console.log(req.params.product_id);
    let sql = `SELECT * FROM labels WHERE product_id = '${req.params.product_id}'`
    connectDB.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results)
    })
})

router.patch('/api/labels/:id', (req, res) => {
    let sql = `UPDATE labels SET
                name = '${req.body.name}'
                WHERE id = '${req.params.id}' `;
    connectDB.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

router.delete('/api/labels/:product_id', (req, res) => {
    let sql = `DELETE FROM labels WHERE product_id = '${req.params.product_id}'`;

    connectDB.query(sql, (err, results) => {
        if(err) throw err;
        res.status(200).send(results);
    })
})

module.exports = router;