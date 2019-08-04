import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

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
    private service: UserService
  ) { }

  ngOnInit() { }

  onLogin() {
    if (this.email.length === 0) {
      alert('enter email')
    } else if (this.password.length === 0) {
      alert('enter password')
    } else {
      this.service
        .sigin(this.email, this.password)
        .subscribe(result =>  {
          if (result['status'] === 'success') {
            const data = result['data']
            sessionStorage['token'] = data['token']
            sessionStorage['usernmae'] = data['firstName'] + ' ' + data['lastName']
            this.router.navigate(['/item/list'])
          } else {
            alert(result['error'])
          }
        })
    }
  }

  onRegister() {

  }
}
