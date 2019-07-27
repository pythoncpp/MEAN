import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class UserService implements CanActivate {

  url = 'http://localhost:4000/portal/user'

  constructor(
    private router: Router,
    private http: Http) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage['loginStatus'] === '1') {
      return true
    }

    this.router.navigate(['/user/signin'])
    return false
  }

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
