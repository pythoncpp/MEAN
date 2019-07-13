import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.list.component.html',
  styleUrls: ['./user.list.component.css']
})

export class UserListComponent implements OnInit {
  users = []

  // DI
  // injects singleyon object of UserService
  constructor(private service: UserService) {
    service
      .getUsers()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] == 'success') {
          this.users = result['data']
        } else {
          alert(result['error'])
        }
      })
  }

  ngOnInit() { }
}
