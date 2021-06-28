import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  templateUrl: './customerinfo.component.html'
})
export class CustomerinfoComponent {
  details: UserDetails
  selectstatus: any; firstname: any; lastname: any; id: any; alldatas: any; email: any; partnerselectstatus: any;
  form: FormGroup;
  createform: FormGroup;
  deleteform: FormGroup;

  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  constructor(private _notifications: NotificationsService,private auth: AuthenticationService, private router: Router,private _fb: FormBuilder) {}

  ngOnInit() {
    this.alldatas = [];
    this.auth.profile().subscribe(
      user => {
        this.details = user
        this.firstname = user.first_name;
        this.lastname = user.last_name;
        this.id = user._id;
        this.email = user.email;
        this.auth.getUserinfo(this.id).subscribe(
          data => {
            if(data.error)
            {
              console.log("success");
              (<HTMLInputElement>document.querySelector("#editbtn")).setAttribute("style", "display:none");
              this.alldatas = {
                userid: this.id, firstname: this.firstname, lastname: this.lastname, email: this.email,
                regionselect: '', regioninput: '', partnerregionselect: '', partnerregioninput: '', roomnumberselect: '', priceselect: '', dateinput: '', movevalue: true,
                valconyvalue: '', petsvalue: '', wheelchairvalue: '', parkingvalue: '', debtvalue: '', suretyvalue: '', tenantmanvalue: true, tenantwomenvalue: false, partnervalue: true, nomovevalue: false,
                partnermanvalue: true, partnerwomenvalue: false, familynamevalue: '', residenceavalue: true, firstnamevalue: '', partnerselectstatus: '', partnersecondphonenumbervalue: '', epartnervalue: false,
                streetvalue: '', postcodevalue: '', residevalue: '', privatetelvalue: '', mobilenumbervalue: '', emailvalue: '', birthvalue: '', hometownvalue: '', civilvalue: '',
                partnerfamilynamevalue: '', partnerresidenceavalue: true, partnerfirstnamevalue: '', partnerstreetvalue: '', partnerpostcodevalue: '', partnerresidevalue: '',
                partnerprivatetelvalue: '', partnermobilenumbervalue: '', partneremailvalue: '', partnerbirthvalue: '', partnerhometownvalue: '', partnercivilvalue: '',
                jobactivityvalue: '', jobtitlevalue: '', monthlyincomevalue: '', employervalue: '', contactvalue: '', phonenumbervalue: '', busyvalue: '', employmentinputvaluefull: true,
                secondjobtitlevalue: '', secondmonthlyincomevalue: '', secondyourcompanyvalue: '', secondcompanyaddressvalue: '', secondphonenumbervalue: '', secondselfvalue: '',
                secondemployeernumbervalue: '', thirdmonthlyincomevalue: '', thirdofficevalue: '', thirdphonenumbervalue: '', partnerjobactivityvalue: '', partnerjobtitlevalue: '',
                partnermonthlyincomevalue: '', partneremployervalue: '', partnercontactvalue: '', partnerphonenumbervalue: '', partnerbusyvalue: '', partneremploymentinputvaluefull: true,
                partnersecondjobtitlevalue: '', partnersecondmonthlyincomevalue: '', partnersecondyourcompanyvalue: '', partnersecondcompanyaddressvalue: '',
                partnersecondselfvalue: '', partnersecondemployeernumbervalue: '', partnerthirdmonthlyincomevalue: '', partnerthirdofficevalue: '', partnerthirdphonenumbervalue: '',
                reasonselectvalue: '', reasoninputvalue: '', previousrentvalue: '', subletvalue: '', adultnumbervalue: '', childrennumbervalue: '', currentvalue: '', telephonevalue: '',
                partnerpreviousrentvalue: '', partnersubletvalue: '', petsquestionnovalue: true, musicalyesvalue: false, vehicleyesvalue: false, listingvalue: false, internetvalue: true,
                partnervehicleyesvalue: false, partnercurrentvalue: '', partnertelephonevalue: '', nametagvalue: '', residencebvalue: false, residencecvalue: false, residencedvalue: false,
                partnerresidencebvalue: false, partnerresidencecvalue: false, partnerresidencedvalue: false, employmentinputvaluepart: false, partneremploymentinputvaluepart: false,
                petsquestionyesvalue: false, musicalnovalue: true, vehiclenovalue: true, othersvalue: false, rentalvalue: false, partnervehiclenovalue: true, fourthemploymentinputvaluefull: true,
                fourthjobtitlevalue: '', fourthmonthlyincomevalue: '', fourthemployervalue: '', fourthcontactvalue: '', fourthphonenumbervalue: '', fourthbusyvalue: '',
                fourthemploymentinputvaluepart: false, employmentinputvalue: '', fourthemploymentinputvalue: '', partneremploymentinputvalue: '', partnerfourthemploymentinputvalue: '',
                partnerfourthemploymentinputvaluefull: true, partnerfourthjobtitlevalue: '', partnerfourthmonthlyincomevalue: '', partnerfourthemployervalue: '', partnerfourthcontactvalue: '',
                partnerfourthphonenumbervalue: '', partnerfourthbusyvalue: '', partnerfourthemploymentinputvaluepart: false, internetinputvalue: '', othersinputvalue: '',
                musicsinputvalue: '', motovalue: '', carvalue: '', partnermotovalue: '', partnercarvalue: '', petsinputvalue: ''
              }
            }
            else{
              (<HTMLInputElement>document.querySelector("#createbtn")).setAttribute("style", "display:none");
              this.alldatas = data.user;
              if(this.alldatas.nomovevalue == true)
              {
                this.showDate();
              }
              if(this.alldatas.jobactivityvalue == "" || this.alldatas.jobactivityvalue == "housewifehousehusband" || this.alldatas.jobactivityvalue == "lookingforwork" || this.alldatas.jobactivityvalue == "ineducation" || this.alldatas.jobactivityvalue == "collegestudent" || this.alldatas.jobactivityvalue == "pensioner")
              {
                (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none");
                (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.jobactivityvalue == "employedindefinitely")
              {
                (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:block !important");
                (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.jobactivityvalue == "employedonatemporarybasis")
              {
                (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:block !important");
              }
              if(this.alldatas.jobactivityvalue == "selfemployed")
              {
                (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:block !important");
                (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.jobactivityvalue == "socialwelfareoffice")
              {
                (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:block !important");
                (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.partnerjobactivityvalue == "" || this.alldatas.partnerjobactivityvalue == "housewifehousehusband" || this.alldatas.partnerjobactivityvalue == "lookingforwork" || this.alldatas.partnerjobactivityvalue == "ineducation" || this.alldatas.partnerjobactivityvalue == "collegestudent" || this.alldatas.partnerjobactivityvalue == "pensioner")
              {
                (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none");
                (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.partnerjobactivityvalue == "employedindefinitely")
              {
                (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:block !important");
                (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.partnerjobactivityvalue == "employedonatemporarybasis")
              {
                (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:block !important");
              }
              if(this.alldatas.partnerjobactivityvalue == "selfemployed")
              {
                (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:block !important");
                (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.partnerjobactivityvalue == "socialwelfareoffice")
              {
                (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
                (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:block !important");
                (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
              }
              if(this.alldatas.employmentinputvaluepart == true)
              {
                (<HTMLInputElement>document.querySelector("#manualpercent")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.fourthemploymentinputvaluepart == true)
              {
                (<HTMLInputElement>document.querySelector("#fourthmanualpercent")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.partneremploymentinputvaluepart == true)
              {
                (<HTMLInputElement>document.querySelector("#manualpercent1")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.partnerfourthemploymentinputvaluepart == true)
              {
                (<HTMLInputElement>document.querySelector("#fourthmanualpercent1")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.petsquestionyesvalue == true)
              {
                (<HTMLInputElement>document.querySelector("#petsinput")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.musicalyesvalue == true)
              {
                (<HTMLInputElement>document.querySelector("#musicsinput")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.vehicleyesvalue == true)
              {
                (<HTMLInputElement>document.querySelector("#vehiclesinput1")).setAttribute("style", "display:flex;");
                (<HTMLInputElement>document.querySelector("#vehiclesinput2")).setAttribute("style", "display:flex;");
              }
              if(this.alldatas.partnervehicleyesvalue == true)
              {
                (<HTMLInputElement>document.querySelector("#partnervehiclesinput1")).setAttribute("style", "display:flex;");
                (<HTMLInputElement>document.querySelector("#partnervehiclesinput2")).setAttribute("style", "display:flex;");
              }
            }
          },
          err => {
            console.error(err)
          }
        )
      },
      err => {
        console.error(err)
      }
    )
		this.form = this._fb.group({
			type: 'success',
			title: 'Success Edit Customer Info',
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: false,
			clickToClose: false,
			animate: 'fromRight'
		});
		this.createform = this._fb.group({
			type: 'info',
			title: 'Success Create Customer Info',
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: false,
			clickToClose: false,
			animate: 'fromRight'
		});
		this.deleteform = this._fb.group({
			type: 'error',
			title: 'Success Delete Customer Info',
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: false,
			clickToClose: false,
			animate: 'rotate'
		});
  }

  changefunc() {
    this.selectstatus = (<HTMLInputElement>document.querySelector("#selectid")).value;
    if(this.selectstatus == "" || this.selectstatus == "housewifehousehusband" || this.selectstatus == "lookingforwork" || this.selectstatus == "ineducation" || this.selectstatus == "collegestudent" || this.selectstatus == "pensioner")
    {
      (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none");
      (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
    }
    if(this.selectstatus == "employedindefinitely")
    {
      (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:block !important");
      (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
    }
    if(this.selectstatus == "employedonatemporarybasis")
    {
      (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:block !important");
    }
    if(this.selectstatus == "selfemployed")
    {
      (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:block !important");
      (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
    }
    if(this.selectstatus == "socialwelfareoffice")
    {
      (<HTMLInputElement>document.querySelector("#firstinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#secondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#thirdinputpanel")).setAttribute("style", "display:block !important");
      (<HTMLInputElement>document.querySelector("#fourthinputpanel")).setAttribute("style", "display:none;");
    }
  }

  partnerchangefunc() {
    this.partnerselectstatus = (<HTMLInputElement>document.querySelector("#partnerselectid")).value;
    if(this.partnerselectstatus == "" || this.partnerselectstatus == "housewifehousehusband" || this.partnerselectstatus == "lookingforwork" || this.partnerselectstatus == "ineducation" || this.partnerselectstatus == "collegestudent" || this.partnerselectstatus == "pensioner")
    {
      (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none");
      (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
    }
    if(this.partnerselectstatus == "employedindefinitely")
    {
      (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:block !important");
      (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
    }
    if(this.partnerselectstatus == "employedonatemporarybasis")
    {
      (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:block !important");
    }
    if(this.partnerselectstatus == "selfemployed")
    {
      (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:block !important");
      (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
    }
    if(this.partnerselectstatus == "socialwelfareoffice")
    {
      (<HTMLInputElement>document.querySelector("#partnerfirstinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnersecondinputpanel")).setAttribute("style", "display:none;");
      (<HTMLInputElement>document.querySelector("#partnerthirdinputpanel")).setAttribute("style", "display:block !important");
      (<HTMLInputElement>document.querySelector("#partnerfourthinputpanel")).setAttribute("style", "display:none;");
    }
  }

  hideDate() {
    (<HTMLInputElement>document.querySelector("#movedate")).setAttribute("style", "display:none;");
    this.alldatas.movevalue = true;
    this.alldatas.nomovevalue = false;
  }

  showDate() {
    (<HTMLInputElement>document.querySelector("#movedate")).setAttribute("style", "display:flex;");
    this.alldatas.movevalue = false;
    this.alldatas.nomovevalue = true;
  }

  tenantselectman() {
    this.alldatas.tenantmanvalue = true;
    this.alldatas.tenantwomenvalue = false;
  }

  tenantselectwomen() {
    this.alldatas.tenantwomenvalue = true;
    this.alldatas.tenantmanvalue = false;
  }

  selectpartner() {
    this.alldatas.partnervalue = true;
    this.alldatas.epartnervalue = false;
  }

  selectepartner() {
    this.alldatas.epartnervalue = true;
    this.alldatas.partnervalue = false;
  }

  selectpartnerman() {
    this.alldatas.partnermanvalue = true;
    this.alldatas.partnerwomenvalue = false;
  }

  selectpartnerwomen() {
    this.alldatas.partnerwomenvalue = true;
    this.alldatas.partnermanvalue = false;
  }

  selectresidencea() {
    this.alldatas.residenceavalue = true;
    this.alldatas.residencebvalue = false;
    this.alldatas.residencecvalue = false;
    this.alldatas.residencedvalue = false;
  }

  selectresidenceb() {
    this.alldatas.residencebvalue = true;
    this.alldatas.residenceavalue = false;
    this.alldatas.residencecvalue = false;
    this.alldatas.residencedvalue = false;
  }

  selectresidencec() {
    this.alldatas.residencecvalue = true;
    this.alldatas.residencebvalue = false;
    this.alldatas.residenceavalue = false;
    this.alldatas.residencedvalue = false;
  }

  selectresidenced() {
    this.alldatas.residencedvalue = true;
    this.alldatas.residencebvalue = false;
    this.alldatas.residencecvalue = false;
    this.alldatas.residenceavalue = false;
  }

  partnerselectresidencea() {
    this.alldatas.partnerresidencedvalue = false;
    this.alldatas.partnerresidencebvalue = false;
    this.alldatas.partnerresidencecvalue = false;
    this.alldatas.partnerresidenceavalue = true;
  }

  partnerselectresidenceb() {
    this.alldatas.partnerresidencedvalue = false;
    this.alldatas.partnerresidencebvalue = true;
    this.alldatas.partnerresidencecvalue = false;
    this.alldatas.partnerresidenceavalue = false;
  }

  partnerselectresidencec() {
    this.alldatas.partnerresidencedvalue = false;
    this.alldatas.partnerresidencebvalue = false;
    this.alldatas.partnerresidencecvalue = true;
    this.alldatas.partnerresidenceavalue = false;
  }

  partnerselectresidenced() {
    this.alldatas.partnerresidencedvalue = true;
    this.alldatas.partnerresidencebvalue = false;
    this.alldatas.partnerresidencecvalue = false;
    this.alldatas.partnerresidenceavalue = false;
  }

  hidepercent() {
    (<HTMLInputElement>document.querySelector("#manualpercent")).setAttribute("style", "display:none;");
    this.alldatas.employmentinputvaluefull=true;
    this.alldatas.employmentinputvaluepart=false;
  }

  showpercent() {
    (<HTMLInputElement>document.querySelector("#manualpercent")).setAttribute("style", "display:flex;");
    this.alldatas.employmentinputvaluefull=false;
    this.alldatas.employmentinputvaluepart=true;
  }

  fourthhidepercent() {
    (<HTMLInputElement>document.querySelector("#fourthmanualpercent")).setAttribute("style", "display:none;");
    this.alldatas.fourthemploymentinputvaluefull=true;
    this.alldatas.fourthemploymentinputvaluepart=false;
  }

  fourthshowpercent() {
    (<HTMLInputElement>document.querySelector("#fourthmanualpercent")).setAttribute("style", "display:flex;");
    this.alldatas.fourthemploymentinputvaluefull=false;
    this.alldatas.fourthemploymentinputvaluepart=true;
  }

  fourthhidepercent1() {
    (<HTMLInputElement>document.querySelector("#fourthmanualpercent1")).setAttribute("style", "display:none;");
    this.alldatas.partnerfourthemploymentinputvaluefull=true;
    this.alldatas.partnerfourthemploymentinputvaluepart=false;
  }

  fourthshowpercent1() {
    (<HTMLInputElement>document.querySelector("#fourthmanualpercent1")).setAttribute("style", "display:flex;");
    this.alldatas.partnerfourthemploymentinputvaluefull=false;
    this.alldatas.partnerfourthemploymentinputvaluepart=true;
  }

  hidepercent1() {
    (<HTMLInputElement>document.querySelector("#manualpercent1")).setAttribute("style", "display:none;");
    this.alldatas.partneremploymentinputvaluefull=true;
    this.alldatas.partneremploymentinputvaluepart=false;
  }

  showpercent1() {
    (<HTMLInputElement>document.querySelector("#manualpercent1")).setAttribute("style", "display:flex;");
    this.alldatas.partneremploymentinputvaluefull=false;
    this.alldatas.partneremploymentinputvaluepart=true;
  }

  petsquestionyes() {
    (<HTMLInputElement>document.querySelector("#petsinput")).setAttribute("style", "display:flex;");
    this.alldatas.petsquestionyesvalue = true;
    this.alldatas.petsquestionnovalue = false;
  }

  petsquestionno() {
    (<HTMLInputElement>document.querySelector("#petsinput")).setAttribute("style", "display:none;");
    this.alldatas.petsquestionyesvalue = false;
    this.alldatas.petsquestionnovalue = true;
  }

  musicalyes() {
    (<HTMLInputElement>document.querySelector("#musicsinput")).setAttribute("style", "display:flex;");
    this.alldatas.musicalyesvalue = true;
    this.alldatas.musicalnovalue = false;
  }

  musicalno() {
    (<HTMLInputElement>document.querySelector("#musicsinput")).setAttribute("style", "display:none;");
    this.alldatas.musicalyesvalue = false;
    this.alldatas.musicalnovalue = true;
  }

  vehicleyes() {
    (<HTMLInputElement>document.querySelector("#vehiclesinput1")).setAttribute("style", "display:flex;");
    (<HTMLInputElement>document.querySelector("#vehiclesinput2")).setAttribute("style", "display:flex;");
    this.alldatas.vehicleyesvalue = true;
    this.alldatas.vehiclenovalue = false;
  }

  vehicleno() {
    (<HTMLInputElement>document.querySelector("#vehiclesinput1")).setAttribute("style", "display:none;");
    (<HTMLInputElement>document.querySelector("#vehiclesinput2")).setAttribute("style", "display:none;");
    this.alldatas.vehicleyesvalue = false;
    this.alldatas.vehiclenovalue = true;
  }

  internetfunc() {
    this.alldatas.internetvalue = true;
    this.alldatas.listingvalue = false;
    this.alldatas.rentalvalue = false;
    this.alldatas.othersvalue = false;
  }

  listingfunc() {
    this.alldatas.internetvalue = false;
    this.alldatas.listingvalue = true;
    this.alldatas.rentalvalue = false;
    this.alldatas.othersvalue = false;
  }

  rentalfunc() {
    this.alldatas.internetvalue = false;
    this.alldatas.listingvalue = false;
    this.alldatas.rentalvalue = true;
    this.alldatas.othersvalue = false;
  }

  othersfunc() {
    this.alldatas.internetvalue = false;
    this.alldatas.listingvalue = false;
    this.alldatas.rentalvalue = false;
    this.alldatas.othersvalue = true;
  }

  partnervehicleyes() {
    (<HTMLInputElement>document.querySelector("#partnervehiclesinput1")).setAttribute("style", "display:flex;");
    (<HTMLInputElement>document.querySelector("#partnervehiclesinput2")).setAttribute("style", "display:flex;");
    this.alldatas.partnervehicleyesvalue = true;
    this.alldatas.partnervehiclenovalue = false;
  }

  partnervehicleno() {
    (<HTMLInputElement>document.querySelector("#partnervehiclesinput1")).setAttribute("style", "display:none;");
    (<HTMLInputElement>document.querySelector("#partnervehiclesinput2")).setAttribute("style", "display:none;");
    this.alldatas.partnervehicleyesvalue = false;
    this.alldatas.partnervehiclenovalue = true;
  }

  createinfo() {
    const temp = this.createform.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type1 = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    this.auth.createcustomerinfo(this.alldatas).subscribe(
      () => {
        this._notifications.create(title, content, type1, temp)
        window.location.reload()
      },
      err => {
        console.error(err)
      }
    )
  }

  editinfo() {
    const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type1 = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    this.auth.editcustomerinfo(this.alldatas).subscribe(
      () => {
		    this._notifications.create(title, content, type1, temp)
      },
      err => {
        console.error(err)
      }
    )
  }

  deleteinfo() {
    const temp = this.deleteform.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type1 = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    this.auth.deletecustomerinfo(this.alldatas._id).subscribe(
      () => {
		    this._notifications.create(title, content, type1, temp)
        window.location.reload()
      },
      err => {
        console.error(err)
      }
    )
  }

}
