import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: "root"
})
export class ItemService {

    constructor(private http: HttpClient) {
    }

    getItems() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }

    getItem(id: number) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
    }
}
