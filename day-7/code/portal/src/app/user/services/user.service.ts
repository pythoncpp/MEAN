import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class UserService {

  url = 'http://localhost:4000/portal/user'

  constructor(
    private http: Http) { }

  verifyAccount(token: string) {
    return this.http.post(this.url + '/activate/' + token, {})
  }

  signin(email: string, password: string) {
    const body = {
      email: email,
      password: password
    }

    const headers = new Headers({'Content-Type': 'application/json'})
    const requestOptions = new RequestOptions( {headers: headers})
    return this.http.post(this.url + '/signin', body, requestOptions)
  }

  signup(userName: string, email: string, password: string,
    phone: string, address: string) {

    const body = {
      name: userName,
      email: email,
      password: password,
      phone: phone,
      address: address
    }

    const headers = new Headers({'Content-Type': 'application/json'})
    const requestOptions = new RequestOptions( {headers: headers})
    return this.http.post(this.url + '/signup', body, requestOptions)
  }
}
