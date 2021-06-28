const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const LetterSchema = new Schema({
  userid: {
    type: String
  },
  htmlContent: {
    type: String
  },
  totalincomecheckbox: {
    type: Boolean
  },
  nodebtcheckbox: {
    type: Boolean
  },
  nopetscheckbox: {
    type: Boolean
  },
  nosmokercheckbox: {
    type: Boolean
  },
  nochildrencheckbox: {
    type: Boolean
  },
  nomusicalcheckbox: {
    type: Boolean
  },
  longtermcheckbox: {
    type: Boolean
  },
  suretycheckbox: {
    type: Boolean
  },
  goodreferencecheckbox: {
    type: Boolean
  },
  admincheckbox: {
    type: Boolean
  },
  socialcheckbox: {
    type: Boolean
  },
  solidcheckbox: {
    type: Boolean
  },
  tenantcheckbox: {
    type: Boolean
  },
  registercheckbox: {
    type: Boolean
  },
  referencecheckbox: {
    type: Boolean
  },
  paycheckbox: {
    type: Boolean
  },
  collectioncheckbox: {
    type: Boolean
  },
  copycheckbox: {
    type: Boolean
  },
  introduce: {
    type: String
  },
  motivation: {
    type: String
  }
})

module.exports = Letter = mongoose.model('letters', LetterSchema)
