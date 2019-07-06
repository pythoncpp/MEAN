import { Component } from '@angular/core'

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  products = [{
        id: 1,
        title: 'product 1',
        price: 100,
        description: 'description for product 1'
    }, {
        id: 2,
        title: 'product 2',
        price: 200,
        description: 'description for product 2'
    }, {
        id: 3,
        title: 'product 3',
        price: 300,
        description: 'description for product 3'
    }, {
        id: 4,
        title: 'product 4',
        price: 400,
        description: 'description for product 4'
    }
  ]

  constructor() {
    console.log('inside third component')
  }
}
