import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  email = ''
  password = ''

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: UserService
  ) { }

  ngOnInit() { }

  onSignin() {
    if (this.email.length === 0) {
      this.toastr.warning('enter email')
    } else if (this.password.length === 0) {
      this.toastr.warning('enter password')
    } else  {
      this.service
        .signin(this.email, this.password)
        .subscribe(response => {
          const result = response.json()
          if (result['status'] === 'success') {
            this.router.navigate(['/home'])
          } else {
            alert(result['error'])
          }
        })
    }
  }
}
