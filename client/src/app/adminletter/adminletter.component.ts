import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './adminletter.component.html'
})
export class AdminletterComponent {
  details: UserDetails
  firstname: any;
  lastname: any;
  allcustomerinfos: any;

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
    this.auth.getAllCustomerinfos().subscribe(
      data => {
        this.allcustomerinfos = data;
        console.log("customerinfos",data)
      },
      err => {
        console.error(err)
      }
    )
  }

  lettergenerating(id) {
    this.router.navigate(['/lettergenerate',{id: id}]);
  }

}
