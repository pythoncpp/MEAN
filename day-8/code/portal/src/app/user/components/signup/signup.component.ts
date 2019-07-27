import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-user-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  userName = ''
  email = ''
  password = ''
  confirmPassword = ''
  phone = ''
  address = ''

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private service: UserService) {

  }

  ngOnInit() { }

  onSignin() {
    this.router.navigate(['/user/signin'])
  }

  onSignup() {
    if (this.userName.length === 0) {
      this.toastr.warning('enter your name')
    } else if (this.password.length === 0)  {
      this.toastr.warning('enter your password')
    } else if (this.password !== this.confirmPassword)  {
      this.toastr.warning('Password doest not match')
    } else {
      this.service
        .signup(this.userName, this.email, this.password, this.phone, this.address)
        .subscribe(response => {
          const result = response.json()
          if (result['status'] === 'success') {
            this.toastr.success('Please check your email for verfication link')
            this.router.navigate(['/user/signin'])
          } else {
            this.toastr.error('error while registering your account, please try later')
          }
        })
    }
  }
}
