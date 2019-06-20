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

  getAllSubjects(): Observable<any> {
    return this.http.get(endpoint + '/subject', httpOptions);
  }
  getSubject(subjectCod): Observable<any> {
    return this.http.get(endpoint + '/subject/' + subjectCod, httpOptions);
  }
  getGroups(subjectCod): Observable<any> {
    return this.http.get(endpoint + '/subject/group/' + subjectCod, httpOptions);
  }
  getUniversityDegree(universityDegreeCod): Observable<any> {
    return this.http.get(endpoint + '/university_degree/' + universityDegreeCod, httpOptions);
  }
  getAllPDA(): Observable<any> {
    return this.http.get( endpoint + '/pda', httpOptions);
  }
  getCoordinator(): Observable<any> {
    return this.http.get(endpoint + '/coordinator', httpOptions);
  }
}
