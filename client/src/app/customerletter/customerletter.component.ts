import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './customerletter.component.html'
})
export class CustomerletterComponent {
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

}
