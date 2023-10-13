import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, forkJoin, map, Observable, switchMap, tap } from 'rxjs';
import { IProduct } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url: string = 'https://restaurant-ba87c-default-rtdb.europe-west1.firebasedatabase.app/menu';
  
  constructor(private http: HttpClient) { }

  // getProducts(type: string) {
  //   return this.http.get<IProduct[]>(`${this.url}/${type}.json`)
  // }

  getStarterMenu(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/starters.json`);
  }

  getMainMenu(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/mainDish.json`);
  }

  getDessertMenu(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.url}/dessert.json`);
  }
}
