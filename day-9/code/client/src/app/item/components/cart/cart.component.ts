import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items = []
  totalPrice = 0

  constructor(
    private router: Router,
    private service: ItemService
  ) { }

  ngOnInit() {
    this.loadCartItems()
  }

  onRemove(item) {
    this.service
      .removeItemFromCart(item.id)
      .subscribe(result => {
        if (result['status'] === 'success') {
          this.loadCartItems()
        } else {
          alert(result['error'])
        }
      })
  }

  onItems() {
    this.router.navigate(['/item/list'])
  }

  loadCartItems() {
    this.service
      .getCartItems()
      .subscribe(result => {
        if (result['status'] === 'success') {
          this.items = result['data']
          this.totalPrice = 0
          this.items.forEach(item => {
            this.totalPrice += item.price
          })
        } else {
          alert(result['error'])
        }
      })
  }
}
