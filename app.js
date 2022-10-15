const express = require('express');
const bodyParser = require('body-parser');
const seq = require('./db/mysqlconnection');

const app = route()


app.use(bodyParser.urlencoded({extended:true}));
seq.sync()

app.use('/',require('./routes/urls'));

