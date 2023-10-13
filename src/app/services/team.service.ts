import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, takeLast } from 'rxjs';
import { ITeamCard } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url: string = 'https://restaurant-ba87c-default-rtdb.europe-west1.firebasedatabase.app/chefs';

  constructor(private http: HttpClient) { }

  getTeam(): Observable<ITeamCard[]> {
    return this.http.get<ITeamCard[]>(`${this.url}.json`);
  }
}
