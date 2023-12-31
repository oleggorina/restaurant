import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICardBlog } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url: string = 'https://restaurant-ba87c-default-rtdb.europe-west1.firebasedatabase.app/blog';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<ICardBlog[]> {
    return this.http.get<ICardBlog[]>(`${this.url}.json`);
  }

  getBlog(id: number) {
    return this.http.get<ICardBlog>(`${this.url}/${id}.json`);
  }
}
