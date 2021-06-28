import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  details: UserDetails
  firstname: any;
  lastname: any;
  usertype: any;

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.details = user
        this.firstname = user.first_name;
        this.lastname = user.last_name;
        this.usertype = user.user_type;
      },
      err => {
        console.error(err)
      }
    )
  }

  gotoinfo() {
    this.router.navigate(['/admininfo',{usertype: this.usertype}])
  }

  gotoletter() {
    this.router.navigateByUrl('/adminletter')
  }

}
