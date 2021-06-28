import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    status: 'notactive',
    user_type: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
          this.router.navigateByUrl('/adminusermanage')
      },
      err => {
        console.error(err)
      }
    )
  }
}
