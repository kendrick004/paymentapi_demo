const express = require('express');

const app = express();

const oauth = require('./routes/oauth');
const product = require('./routes/product');
const transaction = require('./routes/product');

app.get('/', function(req, res){
    res.send('Initial route');
});

app.use('/oauth', oauth);
app.use('/product', product);
app.use('/transaction', transaction);

module.exports = app;