import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from './storage.service';




@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint = 'http://localhost:5000';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'x-access-token': this.storage.getCurrentUser()
    })
  };

  constructor(private http: HttpClient, private storage: StorageService) { }

  getGroups(): Observable<any> {
    return this.http.get(this.endpoint + '/groups', this.httpOptions);
  }
  getGroup(groupCod, subjectCod, areaCod): Observable<any> {
    return this.http.get(this.endpoint + '/group/' + groupCod + '/' + subjectCod + '/' + areaCod, this.httpOptions);
  }
  getAllPDA(): Observable<any> {
    return this.http.get( this.endpoint + '/pda', this.httpOptions);
  }
  getCoordinator(): Observable<any> {
    return this.http.get(this.endpoint + '/coordinator', this.httpOptions);
  }
  getTutorial(): Observable<any>  {
    return this.http.get(this.endpoint + '/tutorial', this.httpOptions);
  }
  getTeacherLoad(): Observable<any>  {
    return this.http.get(this.endpoint + '/teacher_load', this.httpOptions);
  }
  getGroupTeacher(id: number): Observable<any> {
    return this.http.get(this.endpoint + '/teacher_load/' + id, this.httpOptions);
  }
  postImpart(data): Observable<any> {
    return this.http.post(this.endpoint + '/impart', JSON.stringify(data), this.httpOptions);
  }
}
