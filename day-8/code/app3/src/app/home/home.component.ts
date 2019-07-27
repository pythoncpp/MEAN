import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  onLogout() {
    if (confirm('Are your sure you want  to logout?')) {
      sessionStorage.removeItem('loginStatus')
      this.router.navigate(['/signin'])
    }
  }
}
