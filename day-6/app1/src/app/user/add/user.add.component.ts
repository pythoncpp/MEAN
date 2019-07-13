import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user.add.component.html',
  styleUrls: ['./user.add.component.css']
})

export class UserAddComponent implements OnInit {

  firstName = ''
  lastName = ''
  email = ''
  phone = ''
  address = ''

  constructor() { }

  ngOnInit() { }

  onRegister() {
    if (this.firstName.length == 0) {
      alert('enter first name')
    } else if (this.lastName.length == 0) {
      alert('enter last name')
    } else if (this.email.length == 0) {
      alert('enter email')
    } else {
      console.log(`name: ${this.firstName} ${this.lastName}`)
      console.log(`email: ${this.email}`)
      console.log(`phone: ${this.phone}`)
      console.log(`address: ${this.address}`)
    }
  }

  onCancel() {
    this.firstName = ''
    this.lastName = ''
    this.email = ''
    this.phone = ''
    this.address = ''
  }
}
