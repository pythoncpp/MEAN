import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class ProductService {

  url = 'http://localhost:8000/product'

  constructor(private http: Http) { }

  getProducts() {
    return this.http.get(this.url)
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id)
  }

  createProduct(title: string, price: number, description: string) {
    // constructing the body
    const body = {
      title: title,
      price: price,
      description: description
    }

    // changing the content-type to json
    const header = new Headers({'Content-Type': 'application/json'})

    // adding the content-type to request header
    const requestOptions = new RequestOptions({ headers: header })

    return this.http.post(this.url, body, requestOptions)
  }
}
