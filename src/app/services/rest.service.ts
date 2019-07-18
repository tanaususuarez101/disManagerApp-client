import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {filter, map, repeat, tap, find} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint = 'http://localhost:5000';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getGroups(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/groups', httpOptions)
      .pipe(
        map(data => data)
      );
  }

  getGroup(groupCod, subjectCod, areaCod): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/group/' + groupCod + '/' + subjectCod + '/' + areaCod, httpOptions);
  }

  getGroupUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/user_groups', httpOptions);
  }

  getAllPDA(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get( this.endpoint + '/pda', httpOptions)
      .pipe(
        map(data => data)
      );
  }

  getCoordinator(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/coordinator', httpOptions)
      .pipe(
        map(data => data)
      );
  }

  getTutorial(): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/tutorial', httpOptions);
  }

  getTeacherLoad(): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher_load', httpOptions)
      .pipe(
        map(data => data)
      );
  }

  getGroupTeacher(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher_load/' + id, httpOptions);
  }

  postImpart(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/impart', JSON.stringify(data), httpOptions);
  }


  postTeacherLoad(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/teacher_load', JSON.stringify(data), httpOptions);
  }
}
