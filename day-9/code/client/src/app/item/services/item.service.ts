import { Injectable } from '@angular/core';
import { ConfigService } from '../../config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ItemService {
  url = ''

  constructor(
    private configService: ConfigService,
    private http: HttpClient) {

    this.url = this.configService.getConfiguration().url
  }

  removeItemFromCart(id: number) {
    return this.http.delete(this.url + '/cart/' + id)
  }

  getCartItems() {
    return this.http.get(this.url + '/cart')
  }

  addItemToCart(itemId: number, price: number, quantity: number) {
    const body = {
      itemId: itemId,
      price: price,
      quantity: quantity
    }

    return this.http.post(this.url + '/cart', body)
  }

  getItemsForCategory(category: number) {
    return this.http.get(this.url + '/item/category/' + category)
  }

  getCategories() {
    return this.http.get(this.url + '/category')
  }

}
