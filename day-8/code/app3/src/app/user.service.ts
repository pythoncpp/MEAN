import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router/';

@Injectable()
export class UserService implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    // if user is already logged in
    if (sessionStorage['loginStatus'] === '1') {
      return true
    }

    this.router.navigate(['/signin'])

    // if user is not yet logged in
    return false
  }
}
