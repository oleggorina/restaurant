import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITestimonialCard } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  url: string = 'https://restaurant-ba87c-default-rtdb.europe-west1.firebasedatabase.app/testimonials';
  
  constructor(private http: HttpClient) { }

  getTestimonials() {
    return this.http.get<ITestimonialCard[]>(`${this.url}.json`);
  }
}
