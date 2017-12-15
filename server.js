const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('Initial route');
});

module.exports = app;