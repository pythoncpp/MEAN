import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
  username = ''
  password = ''

  constructor(
    private router: Router,
  ) { }

  ngOnInit() { }

  onLogin() {
    if ((this.username === 'user1') && (this.password === 'user1'))  {
      sessionStorage['loginStatus'] = '1'
      this.router.navigate(['/home'])
    } else {
      alert('invalid credentials')
    }
  }
}
