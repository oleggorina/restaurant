import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPopularDishes } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class PopularDishesService {

  url: string = 'https://restaurant-ba87c-default-rtdb.europe-west1.firebasedatabase.app/popular-dishes';

  constructor(private http: HttpClient) { }

  getPopularDishes(): Observable<IPopularDishes[]> {
    return this.http.get<IPopularDishes[]>(`${this.url}.json`);
  }
}
