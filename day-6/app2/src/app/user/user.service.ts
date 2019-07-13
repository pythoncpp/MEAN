import { Injectable } from "@angular/core";
import { Http } from '@angular/http'

@Injectable()
export class UserService  {

  url = 'http://192.168.11.5:8000/user'

  constructor(private http: Http) {
  }

  // get
  getUsers() {
    return this.http.get(this.url)
  }

  // post
  createUser() {
  }

  // put
  updateUser() {

  }

  // delete
  deleteUser() {

  }

}
