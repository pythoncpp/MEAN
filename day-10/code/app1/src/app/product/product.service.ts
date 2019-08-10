import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  url = 'http://localhost:4000/product'

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url)
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id)
  }

  put(id: string, title: string, description: string, rating: number, price: number) {
    const body = {
      title: title,
      description: description,
      rating: rating,
      price: price
    }

    return this.http.put(this.url + '/' + id, body)
  }

  post(title: string, description: string, rating: number, price: number,
      category: string, cpu: string, ram: number, size: string) {
    const body = {
      title: title,
      description: description,
      rating: rating,
      price: price,
      category: category,
      cpu: cpu,
      ram: ram,
      size: size
    }

    return this.http.post(this.url, body)
  }

}
