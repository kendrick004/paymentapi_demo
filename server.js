const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const oauth = require('./routes/oauth');
const product = require('./routes/product');
const transaction = require('./routes/product');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'secret.key.resides.here',
    saveUninitialized: false,
    resave: false
}));

// set the view engine into ejs
// set `views` folder to hold html files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// serve the files out of ./public as our main files
app.use(express.static(path.join(__dirname, 'public')));
// to serve our static files in /transaction and /product path
app.use('/transaction/*',express.static(path.join(__dirname, 'public')));
app.use('/product/*',express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.render('index.html', {
        text: 'this is test'
    });
});
/**
 * Available Paths are
 * 
 * GET          /oauth/redirect
 * GET          /product
 * GET          /product/{id}
 * POST         /product/{id}/add
 * POST         /product/{id}/remove
 * GET          /transaction/confirmation
 * GET          /transaction/checkout
 * POST         /transaction/pay
 */
app.use('/oauth', oauth);
app.use('/product', product);
app.use('/transaction', transaction);

module.exports = app;