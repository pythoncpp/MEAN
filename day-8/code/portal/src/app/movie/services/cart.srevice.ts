import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Subject } from 'rxjs';
import { CartState } from './cart.state';

@Injectable()
export class CartService {

  subject = new Subject<CartState>()

  url = 'http://localhost:4000/portal/cart'

  constructor(
    private http: Http
  ) { }

  getHash(txnid: number, amount: number, pinfo: string, fname: string, email: string, udf5: string) {
    const body =  {
      txnid: txnid,
      amount: amount,
      pinfo: pinfo,
      fname: fname,
      email: email,
      udf5: udf5
    }

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const requestOptions =  new RequestOptions({ headers: headers})
    return this.http.post(this.url + '/hash', body, requestOptions)
  }

  getCartItems() {
    return this.http.get(this.url + '/' + sessionStorage['userid'])
  }

  cartSizeChanged(count: number) {
    console.log('new cart size: ' + count)
    const state: CartState = { count: count }
    this.subject.next(state)
  }

  addToCart(movieId: number, price: number, quantity: number, total: number) {
    const body = {
      movieId: movieId,
      price: price,
      quantity: quantity,
      total: total,
      userId: sessionStorage['userid']
    }

    const headers = new Headers({ 'Content-Type': 'application/json' })
    const requestOptions =  new RequestOptions({ headers: headers})
    return this.http.post(this.url, body, requestOptions)
  }
}
