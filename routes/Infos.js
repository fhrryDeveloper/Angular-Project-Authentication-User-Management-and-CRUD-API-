const express = require('express')
const infos = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Info = require('../models/Info')
infos.use(cors())

process.env.SECRET_KEY = 'secret'

infos.get('/getuserinfo', (req, res) => {
    Info.findOne({
        userid: req.query.id
      })
    .then(user => {
        if (user) {
            res.json({ user })
        } else {
            res.json({ error: 'empty' })
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

infos.get('/allcustomerinfos', (req, res) => {
  Info.find()
    .then(data => {
      if (data) {
        res.json(data)
      } else {
        res.send('No Infos')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

infos.post('/createinfo', (req, res) => {
    const createdata = new Info(req.body.datas);
    createdata.save()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

infos.post('/edituserdataofinfo', (req, res) => {
    Info.findOneAndUpdate(
      {userid: req.body.id},{firstname: req.body.first_name,lastname:req.body.last_name,email: req.body.email}, {useFindAndModify: false})
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })

infos.post('/editcustomerinfo', (req, res) => {
    Info.findOneAndUpdate(
    {_id: req.body._id},req.body, {useFindAndModify: false})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

infos.delete('/deletecustomerinfo', (req, res) => {
    Info.findOneAndRemove({_id: req.query.id})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = infos
