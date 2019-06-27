import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';



const endpoint = 'http://localhost:5000';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(endpoint + '/group', httpOptions);
  }
  getGroup(groupCod, subjectCod, areaCod): Observable<any> {
    return this.http.get(endpoint + '/group/' + groupCod + '/' + subjectCod + '/' + areaCod, httpOptions);
  }
  getAllPDA(): Observable<any> {
    return this.http.get( endpoint + '/pda', httpOptions);
  }
  getCoordinator(): Observable<any> {
    return this.http.get(endpoint + '/coordinator', httpOptions);
  }

  getTutorial(): Observable<any>  {
    return this.http.get(endpoint + '/tutorial', httpOptions);
  }

  getTeacherLoad(): Observable<any>  {
    return this.http.get(endpoint + '/teacher_load', httpOptions);
  }
}
