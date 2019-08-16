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

  /**
   * GROUP
   * */

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

  /**
   * SUBJECT
   * */

  getSubjects() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/subjects', httpOptions);
  }

  getPDAs(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get( this.endpoint + '/subject/pda', httpOptions)
      .pipe(
        map(data => data)
      );
  }

  getSubjectCoordinator(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/subject/coordinator', httpOptions)
      .pipe(
        map(data => data)
      );
  }

  getSubjectResponsible(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/subject/responsible', httpOptions);
  }

  createCoordinatorAndResponsible(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/subject/coordinator', JSON.stringify(data), httpOptions);
  }



  /**
   * TEACHER LOAD
   * */

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

  createTeacherLoad(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/teacher_load', JSON.stringify(data), httpOptions);
  }

  deleteLoadTeacher(areaCod: number, subjectCod: number, groupCod: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.delete(this.endpoint + '/teacher_load/' + areaCod + '/' + subjectCod + '/' + groupCod, httpOptions);
  }

  // tslint:disable-next-line:variable-name
  updateLoadTeacher(area_cod, subject_cod, group_cod, hours) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.put(this.endpoint + '/teacher_load/' + area_cod + '/' + subject_cod + '/' + group_cod, JSON.stringify(hours),
      httpOptions);
  }


  /**
   * TEACHER
  * */

  getTeacher(dni: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher/' + dni, httpOptions);
  }

  updateTeacher(dni: string, data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.put(this.endpoint + '/teacher/' + dni, JSON.stringify(data), httpOptions);
  }

  deleteTeacher(dni: any): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.delete(this.endpoint + '/teacher/' + dni, httpOptions);
  }

  getListTeacher() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teachers', httpOptions);
  }

  getListTutorial(): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher/tutorial', httpOptions);
  }

  getTutorial(dni): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher/tutorial/' + dni, httpOptions);
  }

  createTutorial(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/teacher/tutorial', JSON.stringify(data), httpOptions);
  }

  /**
   * USER
   * */

  getUser(username): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/user/' + username, httpOptions);
  }

  createUser(data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/sign-in', JSON.stringify(data), httpOptions);
  }

  deleteUser(username: any): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.delete(this.endpoint + '/user/' + username, httpOptions);
  }

  updateUser(username: any, data: any): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.put(this.endpoint + '/user/' + username, JSON.stringify(data), httpOptions);
  }

  getListUser(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/users', httpOptions);
  }



}
