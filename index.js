const express = require('express');
const router = require('./routes')
const path = require('path')
const app = express();
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:true}))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use('/', router());

const port = process.env.PORT || 3000
app.listen(port)