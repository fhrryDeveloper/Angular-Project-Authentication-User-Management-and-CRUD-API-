import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { NotificationsService } from 'angular2-notifications';

@Component({
  templateUrl: './adminusermanage.component.html'
})
export class AdminusermanageComponent {

  firstname: any;
  lastname: any;
  email: any;
  password: any;
  usertype: any;
  status: any;
  alluserdatas: any;
  form: FormGroup;
  deleteform: FormGroup;

  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
  constructor(private _notifications: NotificationsService,private auth: AuthenticationService,private _fb: FormBuilder) {}

  ngOnInit() {
    this.auth.getAllUser().subscribe(
      user => {
        this.alluserdatas = user;
      },
      err => {
        console.error(err)
      }
    )
		this.form = this._fb.group({
			type: 'success',
			title: 'Success Edit User',
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: false,
			clickToClose: false,
			animate: 'fromRight'
		});
		this.deleteform = this._fb.group({
			type: 'error',
			title: 'Success Delete User',
			timeOut: 2000,
			showProgressBar: true,
			pauseOnHover: false,
			clickToClose: false,
			animate: 'rotate'
		});
  }

  edituser(id) {
    const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type1 = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    var firstname = (<HTMLInputElement>document.querySelector("#first_"+id)).value;
    var lastname = (<HTMLInputElement>document.querySelector("#last_"+id)).value;
    var type = (<HTMLInputElement>document.querySelector("#type_"+id)).value;
    var email = (<HTMLInputElement>document.querySelector("#email_"+id)).value;
    var password = (<HTMLInputElement>document.querySelector("#password_"+id)).value;
    var status = (<HTMLInputElement>document.querySelector("#status_"+id)).value;
    const credentials: TokenPayload = {
      _id: id,
      first_name: firstname,
      last_name: lastname,
      status: status,
      user_type: type,
      email: email,
      password: password
    }
    this.auth.edituser(credentials).subscribe(
      () => {
		    this._notifications.create(title, content, type1, temp)
      },
      err => {
        console.error(err)
      }
    )
  }

  deleteuser(id) {
    const temp = this.deleteform.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type1 = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    this.auth.deleteuser(id).subscribe(
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
