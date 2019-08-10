import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.css']
})

export class ProductListComponent implements OnInit {
  products = []

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.service
      .get()
      .subscribe(result => {
        if (result['status'] === 'success') {
          this.products = result['data']
        } else {
          alert(result['error'])
        }
      })
  }

  onEdit(product) {

  }

  onDelete(product) {
    this.service
      .delete(product._id)
      .subscribe(result => {
        if (result['status'] === 'success') {
          this.loadProducts()
        } else {
          alert(result['error'])
        }
      })
  }
}
