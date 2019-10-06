import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HeaderService} from './header.service';

const endpoint = 'http://localhost:5000';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};



@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {



  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post(endpoint + '/login', user, httpOptions);
  }

  logout() {
    this.removeTokenandUser();
  }
/*
  updateCurrentUser(user) {
    return this.http.put(endpoint + '/currentUser', user, {headers: this.header.buildHeaderToken()});
  }
*/

  getCurrent(token): Observable<any> {
    const httpHeaderToken = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': token
      })
    };
    return this.http.get(endpoint + '/currentUser', httpHeaderToken);
  }

  setToken(token): void {
    window.localStorage.setItem('accessToken', JSON.stringify(token));
  }

  setUser(user): void {
    window.localStorage.setItem('currentUser', JSON.stringify(user));
  }

  removeTokenandUser(): void {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('currentUser');
  }

  getToken() {
    const cookie = window.localStorage.getItem('accessToken');
    return JSON.parse(cookie);
  }

  getUser() {
    return JSON.parse(window.localStorage.getItem('currentUser'));
  }

}
