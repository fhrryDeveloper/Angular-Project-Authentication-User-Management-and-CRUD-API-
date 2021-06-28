const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const InfoSchema = new Schema({
  userid: {
    type: String
  },
  firstname: {
    type: String
  }, 
  lastname: {
    type: String
  }, 
  email: {
    type: String
  }, 
  regionselect: {
    type: String
  }, 
  regioninput: {
    type: String
  }, 
  partnerregionselect: {
    type: String
  }, 
  partnerregioninput: {
    type: String
  }, 
  roomnumberselect: {
    type: String
  }, 
  priceselect: {
    type: String
  }, 
  dateinput: {
    type: String
  }, 
  movevalue: {
    type: Boolean
  },
  valconyvalue: {
    type: String
  }, 
  petsvalue: {
    type: String
  }, 
  wheelchairvalue: {
    type: String
  }, 
  parkingvalue: {
    type: String
  }, 
  debtvalue: {
    type: String
  }, 
  suretyvalue: {
    type: String
  }, 
  tenantmanvalue: {
    type: Boolean
  }, 
  tenantwomenvalue: {
    type: Boolean
  }, 
  partnervalue: {
    type: Boolean
  },
  nomovevalue: {
    type: Boolean
  },
  partnermanvalue: {
    type: Boolean
  },
  partnerwomenvalue: {
    type: Boolean
  },
  familynamevalue: {
    type: String
  }, 
  residenceavalue: {
    type: Boolean
  },
  firstnamevalue: {
    type: String
  }, 
  partnerselectstatus: {
    type: String
  }, 
  partnersecondphonenumbervalue: {
    type: String
  }, 
  epartnervalue: {
    type: Boolean
  },
  streetvalue: {
    type: String
  }, 
  postcodevalue: {
    type: String
  }, 
  residevalue: {
    type: String
  }, 
  privatetelvalue: {
    type: String
  }, 
  mobilenumbervalue: {
    type: String
  }, 
  emailvalue: {
    type: String
  }, 
  birthvalue: {
    type: String
  }, 
  hometownvalue: {
    type: String
  }, 
  civilvalue: {
    type: String
  },
  partnerfamilynamevalue: {
    type: String
  }, 
  partnerresidenceavalue: {
    type: Boolean
  },
  partnerfirstnamevalue: {
    type: String
  }, 
  partnerstreetvalue: {
    type: String
  }, 
  partnerpostcodevalue: {
    type: String
  }, 
  partnerresidevalue: {
    type: String
  },
  partnerprivatetelvalue: {
    type: String
  }, 
  partnermobilenumbervalue: {
    type: String
  }, 
  partneremailvalue: {
    type: String
  }, 
  partnerbirthvalue: {
    type: String
  }, 
  partnerhometownvalue: {
    type: String
  }, 
  partnercivilvalue: {
    type: String
  },
  jobactivityvalue: {
    type: String
  }, 
  jobtitlevalue: {
    type: String
  }, 
  monthlyincomevalue: {
    type: String
  }, 
  employervalue: {
    type: String
  }, 
  contactvalue: {
    type: String
  }, 
  phonenumbervalue: {
    type: String
  }, 
  busyvalue: {
    type: String
  }, 
  employmentinputvaluefull: {
    type: Boolean
  },
  secondjobtitlevalue: {
    type: String
  }, 
  secondmonthlyincomevalue: {
    type: String
  }, 
  secondyourcompanyvalue: {
    type: String
  }, 
  secondcompanyaddressvalue: {
    type: String
  }, 
  secondphonenumbervalue: {
    type: String
  }, 
  secondselfvalue: {
    type: String
  },
  secondemployeernumbervalue: {
    type: String
  }, 
  thirdmonthlyincomevalue: {
    type: String
  }, 
  thirdofficevalue: {
    type: String
  }, 
  thirdphonenumbervalue: {
    type: String
  }, 
  partnerjobactivityvalue: {
    type: String
  }, 
  partnerjobtitlevalue: {
    type: String
  },
  partnermonthlyincomevalue: {
    type: String
  }, 
  partneremployervalue: {
    type: String
  }, 
  partnercontactvalue: {
    type: String
  }, 
  partnerphonenumbervalue: {
    type: String
  }, 
  partnerbusyvalue: {
    type: String
  }, 
  partneremploymentinputvaluefull: {
    type: Boolean
  },
  partnersecondjobtitlevalue: {
    type: String
  }, 
  partnersecondmonthlyincomevalue: {
    type: String
  }, 
  partnersecondyourcompanyvalue: {
    type: String
  }, 
  partnersecondcompanyaddressvalue: {
    type: String
  },
  partnersecondselfvalue: {
    type: String
  }, 
  partnersecondemployeernumbervalue: {
    type: String
  }, 
  partnerthirdmonthlyincomevalue: {
    type: String
  }, 
  partnerthirdofficevalue: {
    type: String
  }, 
  partnerthirdphonenumbervalue: {
    type: String
  },
  reasonselectvalue: {
    type: String
  }, 
  reasoninputvalue: {
    type: String
  }, 
  previousrentvalue: {
    type: String
  }, 
  subletvalue: {
    type: String
  }, 
  adultnumbervalue: {
    type: String
  }, 
  childrennumbervalue: {
    type: String
  }, 
  currentvalue: {
    type: String
  }, 
  telephonevalue: {
    type: String
  },
  partnerpreviousrentvalue: {
    type: String
  }, 
  partnersubletvalue: {
    type: String
  }, 
  petsquestionnovalue: {
    type: Boolean
  },
  musicalyesvalue: {
    type: Boolean
  },
  vehicleyesvalue: {
    type: Boolean
  },
  listingvalue: {
    type: Boolean
  },
  internetvalue: {
    type: Boolean
  },
  partnervehicleyesvalue: {
    type: Boolean
  },
  partnercurrentvalue: {
    type: String
  }, 
  partnertelephonevalue: {
    type: String
  }, 
  nametagvalue: {
    type: String
  }, 
  residencebvalue: {
    type: Boolean
  },
  residencecvalue: {
    type: Boolean
  },
  residencedvalue: {
    type: Boolean
  },
  partnerresidencebvalue: {
    type: Boolean
  },
  partnerresidencecvalue: {
    type: Boolean
  },
  partnerresidencedvalue: {
    type: Boolean
  },
  employmentinputvaluepart: {
    type: Boolean
  },
  partneremploymentinputvaluepart: {
    type: Boolean
  },
  petsquestionyesvalue: {
    type: Boolean
  },
  musicalnovalue: {
    type: Boolean
  },
  vehiclenovalue: {
    type: Boolean
  },
  othersvalue: {
    type: Boolean
  },
  rentalvalue: {
    type: Boolean
  },
  partnervehiclenovalue: {
    type: Boolean
  },
  fourthemploymentinputvaluefull: {
    type: Boolean
  },
  fourthjobtitlevalue: {
    type: String
  }, 
  fourthmonthlyincomevalue: {
    type: String
  }, 
  fourthemployervalue: {
    type: String
  }, 
  fourthcontactvalue: {
    type: String
  }, 
  fourthphonenumbervalue: {
    type: String
  }, 
  fourthbusyvalue: {
    type: String
  },
  fourthemploymentinputvaluepart: {
    type: Boolean
  },
  employmentinputvalue: {
    type: String
  }, 
  fourthemploymentinputvalue: {
    type: String
  }, 
  partneremploymentinputvalue: {
    type: String
  }, 
  partnerfourthemploymentinputvalue: {
    type: String
  },
  partnerfourthemploymentinputvaluefull: {
    type: Boolean
  },
  partnerfourthjobtitlevalue: {
    type: String
  }, 
  partnerfourthmonthlyincomevalue: {
    type: String
  }, 
  partnerfourthemployervalue: {
    type: String
  }, 
  partnerfourthcontactvalue: {
    type: String
  },
  partnerfourthphonenumbervalue: {
    type: String
  }, 
  partnerfourthbusyvalue: {
    type: String
  }, 
  partnerfourthemploymentinputvaluepart: {
    type: Boolean
  },
  internetinputvalue: {
    type: String
  }, 
  othersinputvalue: {
    type: String
  },
  petsinputvalue: {
    type: String
  },
  musicsinputvalue: {
    type: String
  },
  motovalue: {
    type: String
  },
  carvalue: {
    type: String
  },
  partnermotovalue: {
    type: String
  },
  partnercarvalue: {
    type: String
  },
})

module.exports = Info = mongoose.model('infos', InfoSchema)
