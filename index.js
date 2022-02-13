const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(require('./routes/labels'));
app.use(require('./routes/products'));

app.listen('8080', () => {
    console.log('server is running on port 8080')
})

