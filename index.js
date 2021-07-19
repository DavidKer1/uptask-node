const express = require('express');
const router = require('./routes')
const path = require('path')
const app = express();

// DB Connection
const db = require('./config/db')

require('./models/Proyectos')

db.sync()
  .then(() => {
    console.log('DB Connected')
  })
  .catch(err => console.error(err))

const bodyParser = require('body-parser')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:true }))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

app.use('/', router());

const port = process.env.PORT || 3000
app.listen(port)