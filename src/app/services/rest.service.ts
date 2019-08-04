import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {filter, map, repeat, tap, find, catchError} from 'rxjs/operators';


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
    return this.http.get(this.endpoint + '/group/' + areaCod + '/' + subjectCod + '/' + groupCod, httpOptions);
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

  getAllTutorial(): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/tutorial', httpOptions);
  }
  getTutorial(dni): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/tutorial/' + dni, httpOptions);
  }
  getTeacherLoads(): Observable<any>  {
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

  getTeacherLoad(dni): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher_load/' + dni, httpOptions);
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

  postUser(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/sign-in', JSON.stringify(data), httpOptions);
  }

  postListTeacher(fileToUpload: File): Observable <any> {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/upload_teacher', formData,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'x-access-token': this.auth.getToken()
        }),
        observe: 'events',
        reportProgress: true
      });
  }

  postLoadScheme(fileToUpload: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/upload_database', formData,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'x-access-token': this.auth.getToken()
        }),
        observe: 'events',
        reportProgress: true});
  }

  postLoadPda(fileToUpload: File) {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/upload_pda', formData,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'x-access-token': this.auth.getToken()
        }),
        observe: 'events',
        reportProgress: true});
  }

  postTutorial(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/tutorial', JSON.stringify(data), httpOptions);
  }
}
