import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product.add.component.html',
  styleUrls: ['./product.add.component.css']
})

export class ProductAddComponent implements OnInit {
  title = ''
  description = ''
  price = 0

  constructor(
    private router: Router,
    private service: ProductService
  ) { }

  ngOnInit() { }

  onAdd() {
    if (this.title.length == 0) {
      alert('enter title')
    } else if (this.price == 0) {
      alert('enter price')
    } else if (this.description.length == 0) {
      alert('enter description')
    } else {
      this.service
        .createProduct(this.title, this.price, this.description)
        .subscribe(response => {
          const result = response.json()
          if (result['status'] == 'success') {
            this.router.navigate(['/product-list'])
          } else {
            alert('error while adding product')
          }
        })
    }
  }

  onCancel() {
    this.router.navigate(['/product-list'])
  }
}
