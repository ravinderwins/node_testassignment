const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
var bodyParser = require('body-parser');

const routes = require('./router');

const app = express();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// configure the view engine 
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));

// set the view engine
app.set('view engine', 'hbs');

//Serves static files (we need it to import a css file)
app.use(express.static('public'))

// configure views path
app.set('views', path.join(__dirname, '/views'));

// initilizing routes
app.use('/', routes);

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);