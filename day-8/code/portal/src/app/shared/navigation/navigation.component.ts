import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../movie/services/cart.srevice';
import { CartState } from '../../movie/services/cart.state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-shared-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  username = ''
  cartSize = 0

  constructor(
    private modalService: NgbModal,
    private cartServie: CartService,
    private router: Router
  ) { }

  onCart(test) {
    const ref = this.modalService.open(CartComponent, {size: 'lg'})
  }

  ngOnInit() {
    this.username = sessionStorage['username']
    this.cartServie.subject.subscribe((state: CartState) =>  {
      console.log('new cart size: ' + state.count)
      this.cartSize = state.count
    })

    this.cartServie
      .getCartItems()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          this.cartSize = result['data'].length
        }
      })
  }

  onLogout() {
    if (confirm('are you sure you want to logout?')) {
      sessionStorage.removeItem('loginStatus')
      this.router.navigate(['/user/signin'])
    }
  }
}
