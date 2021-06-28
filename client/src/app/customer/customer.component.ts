import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  details: UserDetails
  firstname: any;
  lastname: any;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
        this.firstname = user.first_name;
        this.lastname = user.last_name;
      },
      err => {
        console.error(err)
      }
    )
  }

  gotoinfo() {
    this.router.navigateByUrl('/customerinfo')
  }

  gotoletter() {
    this.router.navigateByUrl('/customerletter')
  }

}
