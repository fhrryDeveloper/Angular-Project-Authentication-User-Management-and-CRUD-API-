import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './customerregister.component.html'
})
export class CustomerregisterComponent {
  credentials: TokenPayload = {
    _id: '',
    first_name: '',
    last_name: '',
    status: 'notactive',
    user_type: 'customer',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
          this.router.navigateByUrl('/consultantusermanage')
      },
      err => {
        console.error(err)
      }
    )
  }
}
