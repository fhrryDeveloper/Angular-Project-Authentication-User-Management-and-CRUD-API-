var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb://localhost:27017/application'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')
app.use('/users', Users)


var Infos = require('./routes/Infos')
app.use('/infos', Infos)

var Letters = require('./routes/Letters')
app.use('/letters', Letters)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
