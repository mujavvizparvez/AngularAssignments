import { IUser } from '../models/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //  users: IUser[] = [];
  baseUrl = 'https://to-do-list-angular-10915-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) {}
  addDetails(user: IUser): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(`${this.baseUrl}users.json`, user);
  }
  getDetails(): Observable<IUser[]> {
    // this.users = [];
    return this.http
      .get<{ [id: string]: IUser }[]>(`${this.baseUrl}users.json`)
      .pipe(
        map((users) => {
          let formattedDetails: IUser[] = [];
          for (let id in users) {
            formattedDetails.push({
              id,
              ...users[id],
            } as IUser);
          }
          return formattedDetails;
        })
      );
  }
  getDetailsById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}users/${id}.json`);
  }
  updateDetails(user: IUser, id: string) {
    return this.http.put(`${this.baseUrl}users/${id}.json`, user);
  }
  deleteDetails(id: string) {
    return this.http.delete(`${this.baseUrl}users/${id}.json`);
  }
}
