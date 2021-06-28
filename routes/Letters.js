const express = require('express')
const letters = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Letter = require('../models/Letter')
letters.use(cors())

process.env.SECRET_KEY = 'secret'

letters.get('/getletter', (req, res) => {
  Letter.findOne({
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

// infos.get('/allcustomerinfos', (req, res) => {
//   Info.find()
//     .then(data => {
//       if (data) {
//         res.json(data)
//       } else {
//         res.send('No Infos')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

letters.post('/createletter', (req, res) => {
  const createdata = new Letter(req.body.datas);
  createdata.save()
  .then(user => {
    res.json(user);
  })
  .catch(err => {
    res.send('error: ' + err)
  })
})

// letters.post('/edituserdataofinfo', (req, res) => {
//   Letter.findOneAndUpdate(
//       {userid: req.body.id},{firstname: req.body.first_name,lastname:req.body.last_name,email: req.body.email}, {useFindAndModify: false})
//       .then(user => {
//         res.json(user);
//       })
//       .catch(err => {
//         res.send('error: ' + err)
//       })
//   })

letters.post('/editletter', (req, res) => {
  Letter.findOneAndUpdate(
    {userid: req.body.userid},req.body, {useFindAndModify: false})
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

letters.delete('/deleteletter', (req, res) => {
  Letter.findOneAndRemove({userid: req.query.id})
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


module.exports = letters
