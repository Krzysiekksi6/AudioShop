import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3002';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/api/products');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/products/' + id);
  }

  add(item: Product) {
    return this.http.post(this.url + '/api/products/', item);
  }

  update(item: Product, id: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log("SERVICE ID", id);
    return this.http.put(this.url + '/api/products/' + id, item, { headers });
  }
  delete(id: string) {
    return this.http.delete(this.url + '/api/products/delete/' + id);
  }
}
