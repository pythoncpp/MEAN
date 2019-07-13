import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  onAdd() {
    this.router.navigate(['/product-add'])
  }

  onList() {
    this.router.navigate(['/product-list'])
  }
}
