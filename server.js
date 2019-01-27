const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel'); //created model loading here
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Hello World!');
});



// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3002, () => {
    console.log('Example app listening on port 3002!');
});