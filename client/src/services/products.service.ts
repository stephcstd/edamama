import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) {  }

  getProducts() {
    return this.http.get('http://localhost:3000/api/products')
  }

  getCart() {
    return this.http.get('http://localhost:3000/api/cart')
  }

  addToCart(productId:any, qty:any){
    let data = {productId:productId, qty:qty}
    const headers = new HttpHeaders({'myHeader': 'Request Header'})
    return this.http.post<{name: string}>('http://localhost:3000/api/cart', {data}, {headers: headers})
  }

}
