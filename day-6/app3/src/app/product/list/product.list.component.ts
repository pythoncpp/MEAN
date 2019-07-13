import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = []

  constructor(
    private router: Router,
    private service: ProductService) {
      this.loadProducts()
  }

  loadProducts() {
    this.service
      .getProducts()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] == 'success') {
          this.products = result['data']
        } else {
          alert('error while loading the products')
        }
      })
  }

  onAdd() {
    this.router.navigate(['/product-add'])
  }

  onEdit(product) {

  }

  onDelete(product) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.service
        .deleteProduct(product.id)
        .subscribe(response => {
          const result = response.json()
          if (result['status'] == 'success') {
            this.loadProducts()
          } else {
            alert('error while deleting the product')
          }
        })
    }
  }

  ngOnInit() { }
}
