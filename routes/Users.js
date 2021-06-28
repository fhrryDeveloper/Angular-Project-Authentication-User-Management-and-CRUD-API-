const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    status: req.body.status,
    user_type: req.body.user_type,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        User.create(userData)
          .then(user => {
            const payload = {
              _id: user._id,
              first_name: user.first_name,
              last_name: user.last_name,
              status: user.status,
              user_type: user.user_type,
              email: user.email
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      } else {
        res.json({ error: 'Email already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          status: user.status,
          user_type: user.user_type,
          email: user.email
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ user_type: user.user_type, token: token, status: user.status })
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/alluser', (req, res) => {
  User.find()
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/allcustomer', (req, res) => {
  User.find({user_type : "customer"})
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/editprofile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  User.findOneAndUpdate(
    {_id: decoded._id},{first_name: req.body.first_name,last_name:req.body.last_name,email: req.body.email,password: req.body.password}, {useFindAndModify: false})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/edituser', (req, res) => {
  User.findOneAndUpdate(
    {_id: req.body._id},{first_name: req.body.first_name,last_name:req.body.last_name,user_type:req.body.user_type,email: req.body.email,password: req.body.password,status:req.body.status}, {useFindAndModify: false})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.delete('/deleteuser', (req, res) => {
  User.findOneAndRemove({_id: req.query.id})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
