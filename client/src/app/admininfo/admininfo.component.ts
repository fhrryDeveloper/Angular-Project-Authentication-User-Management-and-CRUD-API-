import { Component } from '@angular/core'
import { AuthenticationService } from '../authentication.service'
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './admininfo.component.html'
})
export class AdmininfoComponent {
  firstname: any;
  lastname: any;
  email: any;
  password: any;
  usertype: any;
  status: any;
  allcustomers: any;

  constructor(private auth: AuthenticationService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        this.usertype = user.user_type;
      },
      err => {
        console.error(err)
      }
    )
    this.auth.getAllCustomer().subscribe(
      user => {
        this.allcustomers = user;
      },
      err => {
        console.error(err)
      }
    )
  }

  manageinfo(id,firstname,lastname,email) {
    this.router.navigate(['/admininfomanage',{id: id,firstname: firstname,lastname:lastname,email:email}]);
  }

}
