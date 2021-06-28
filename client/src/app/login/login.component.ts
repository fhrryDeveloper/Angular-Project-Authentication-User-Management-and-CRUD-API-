import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    status: '',
    user_type: '',
    email: '',
    password: ''
  }

  error: any;
  active: any;

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      data => {
        if(data.user_type == "admin" && data.status == "active")
        {
          this.router.navigateByUrl('/admin')
        }
        if(data.user_type == "consultant" && data.status == "active")
        {
          this.router.navigateByUrl('/consultant')
        }
        if(data.user_type == "customer" && data.status == "active")
        {
          this.router.navigateByUrl('/customer')
        }
        if(data.error)
        {
          this.error = data.error;
        }
        if(data.status == "notactive") {
          this.active = "your account is not active";
        }
      },
      err => {
        alert(err)
        console.error(err)
      }
    )
  }
}
