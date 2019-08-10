import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product.add.component.html',
  styleUrls: ['./product.add.component.css']
})

export class ProductAddComponent implements OnInit {
  title = ''
  description = ''
  price = 0
  rating = 0
  category = 'select'
  cpu = ''
  ram = 0
  size = ''

  constructor(
    private service: ProductService
  ) { }

  ngOnInit() { }

  onSave() {
    this.service
      .post(this.title, this.description, this.rating, this.price,
          this.category, this.cpu, this.ram, this.size)
      .subscribe(result => {
        if (result['status'] === 'success') {
          this.onCancel()
        } else {
          alert(result['error'])
        }
      })
  }

  onCancel() {
    this.title = ''
    this.description = ''
    this.price = 0
    this.rating = 0
  }
}
