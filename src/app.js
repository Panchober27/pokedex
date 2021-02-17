const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();



// Settings.
app.set('port', process.env.PORT || 3500);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Middlewares.
app.use(morgan('dev'));
/**
 * app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: '3306',
    database: 'pokedb'
}, 'single'));
app.use(express.urlencoded({extended: false}));
 */

// Routes.
app.use(require('./routes/index'));


// Static files.
app.use(express.static(path.join(__dirname, 'public')));


// Listening the server.
app.listen(app.get('port'), () => {
    console.log('POKE DB started on port ', app.get('port'));
});