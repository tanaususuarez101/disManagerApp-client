import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint = 'http://localhost:5000';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }


  /**
   * MANAGER DATA BASES
   * */

  postListTeacher(fileToUpload: File): Observable <any> {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/database/teacher', formData,
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
    return this.http.post(this.endpoint + '/database', formData,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'x-access-token': this.auth.getToken()
        }),
        observe: 'events',
        reportProgress: true});
  }

  getExportDataBase() {
    return this.endpoint + '/database';
  }
  getBackupDataBase() {
    return this.endpoint + '/database/backup';
  }

  postLoadPda(fileToUpload: File) {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/database/pda', formData,
      {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'x-access-token': this.auth.getToken()
        }),
        observe: 'events',
        reportProgress: true});
  }

  deleteScheme() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.delete(this.endpoint + '/database', httpOptions);
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
    return this.http.get(this.endpoint + '/groups', httpOptions);
  }

  getAvailableGroups(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/groups/available', httpOptions);
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

  getTeacherLoadRequest(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/teacher_load/request', httpOptions);
  }

  updateTeacherLoadRequest(areaCod: any, subjectCod: any, groupCod: any, teacherDni: any, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.put(this.endpoint + '/teacher_load/' + areaCod + '/' + subjectCod + '/' + groupCod + '/' + teacherDni ,
      JSON.stringify(data), httpOptions);
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


  /**
   * Knowledge Area
   * */

  getAreas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/knowledgeAreas', httpOptions);
  }

  createVeniaType1(data): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/veniaI', JSON.stringify(data), httpOptions);
  }

  createVeniaType2(data): Observable<any>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.post(this.endpoint + '/veniaII', JSON.stringify(data), httpOptions);
  }

  getSubjectsArea(areaCod): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/subjects/area/' + areaCod, httpOptions);
  }


  /**
   * VENIAS
   * */
  getVeniaType1(dni: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/veniaI/' + dni, httpOptions);
  }

  getAllVeniaType1(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/veniaI', httpOptions);
  }

  getVeniaType2(dni: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/veniaII/' + dni, httpOptions);
  }

  getAllVeniaType2(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.get(this.endpoint + '/veniaII', httpOptions);
  }


  updateVeniaType1(areaCod: any, teacherDni: any, status: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.put(this.endpoint + '/veniaI/' + areaCod + '/' + teacherDni, JSON.stringify(status), httpOptions);
  }

  updateVeniaType2(areaCod: any, subjectCod: any, teacherDni: any, status: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'x-access-token': this.auth.getToken()
      })
    };
    return this.http.put(this.endpoint + '/veniaII/' + areaCod + '/' + subjectCod + '/' + teacherDni, JSON.stringify(status), httpOptions);
  }



}
