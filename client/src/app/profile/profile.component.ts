import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications'
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service'

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails

  firstname: any;
  lastname: any;
  emailaddress: any;
  userpass: any;
  id: any;
  form: FormGroup;

  types = ['alert', 'error', 'info', 'warn', 'success'];
	animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];

  constructor(private _notifications: NotificationsService,private _fb: FormBuilder,private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user;
        this.firstname = this.details.first_name;
        this.lastname = this.details.last_name;
        this.emailaddress = this.details.email;
        this.userpass = this.details.password;
        this.id = this.details._id;
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
  }

  editprofile() {
    const temp = this.form.getRawValue();
		const title = temp.title;
		const content = temp.content;
		const type1 = temp.type;

		delete temp.title;
		delete temp.content;
		delete temp.type;
    const credentials: TokenPayload = {
      _id: '',
      first_name: this.firstname,
      last_name: this.lastname,
      status: '',
      user_type: '',
      email: this.emailaddress,
      password: this.userpass
    }
    const updatedata = {
      id: this.id,
      first_name: this.firstname,
      last_name: this.lastname,
      email: this.emailaddress
    }
    this.auth.editprofile(credentials).subscribe(
      () => {
		    this._notifications.create(title, content, type1, temp)
      },
      err => {
        console.error(err)
      }
    )
    this.auth.edituserdataofinfo(updatedata).subscribe(
      () => {
      },
      err => {
        console.error(err)
      }
    )
  }

}
