import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string = 'https://restaurant-ba87c-default-rtdb.europe-west1.firebasedatabase.app/menu';
  
  constructor(private http: HttpClient) { }

  getProducts(type: string) {
    return this.http.get<IProduct[]>(`${this.url}/${type}.json`)
  }
  
}
