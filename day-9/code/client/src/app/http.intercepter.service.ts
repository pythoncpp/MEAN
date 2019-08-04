import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpIntercepterService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler)  {

    const request =
      (sessionStorage['token'] === undefined) ?
          req.clone({
            setHeaders: {
              'Content-type': 'application/json'
            }
          })
        :
          req.clone({
            setHeaders: {
              'Content-type': 'application/json',
              'x-auth-token': sessionStorage['token']
            }
          })

    return next.handle(request)
  }
}
