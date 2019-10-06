import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';
import {HeaderService} from './header.service';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint = 'http://localhost:5000';

  constructor(private http: HttpClient, private header: HeaderService) {
  }


  /**
   * MANAGER DATA BASES
   * */

  postListTeacher(fileToUpload: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/database/teacher', formData,
      {
        headers: this.header.builHeaderFile(),
        observe: 'events',
        reportProgress: true
      });
  }

  postLoadScheme(fileToUpload: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(this.endpoint + '/database', formData,
      {
        headers: this.header.builHeaderFile(),
        observe: 'events',
        reportProgress: true
      });
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
        headers: this.header.builHeaderFile(),
        observe: 'events',
        reportProgress: true
      });
  }

  deleteScheme() {
    return this.http.delete(this.endpoint + '/database', {headers: this.header.buildHeaderToken()});
  }

  /**
   * GROUP
   * */

  getGroups(): Observable<any> {
    return this.http.get(this.endpoint + '/groups', {headers: this.header.buildHeaderToken()});
  }

  getGroup(groupCod, subjectCod, areaCod): Observable<any> {
    return this.http.get(this.endpoint + '/group/' + areaCod + '/' + subjectCod + '/' + groupCod,
      {headers: this.header.buildHeaderToken()});
  }

  /**
   * SUBJECT
   * */


  getSubjects() {
    return this.http.get(this.endpoint + '/subjects', {headers: this.header.buildHeaderToken()});
  }

  getPDAs(): Observable<any> {
    return this.http.get(this.endpoint + '/subject/pda', {headers: this.header.buildHeaderToken()});
  }

  getSubjectCoordinators(): Observable<any> {
    return this.http.get(this.endpoint + '/subject/coordinator', {headers: this.header.buildHeaderToken()});
  }

  getSubjectCoordinator(dni: any) {
    return this.http.get(this.endpoint + '/subject/coordinator/' + dni, {headers: this.header.buildHeaderToken()});
  }

  createSubjectCoordinator(dni, data) {
    return this.http.post(this.endpoint + '/subject/coordinator/' + dni, JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  getSubjectResponsibles(): Observable<any> {
    return this.http.get(this.endpoint + '/subject/responsible', {headers: this.header.buildHeaderToken()});
  }

  getSubjectResponsible(dni: any): Observable<any> {
    return this.http.get(this.endpoint + '/subject/responsible/' + dni, {headers: this.header.buildHeaderToken()});
  }

  createSubjectResponsible(dni, data) {
    return this.http.post(this.endpoint + '/subject/responsible/' + dni, JSON.stringify(data),
      {headers: this.header.buildHeaderToken()});
  }

  /**
   * TEACHER LOAD
   * */


  getTeacherLoads(): Observable<any> {
    return this.http.get(this.endpoint + '/teacher_load', {headers: this.header.buildHeaderToken()});
  }

  getTeacherLoad(dni): Observable<any> {
    return this.http.get(this.endpoint + '/teacher_load/' + dni, {headers: this.header.buildHeaderToken()});
  }

  createTeacherLoad(data): Observable<any> {
    return this.http.post(this.endpoint + '/teacher_load', JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  deleteLoadTeacher(areaCod: number, subjectCod: number, groupCod: number) {
    return this.http.delete(this.endpoint + '/teacher_load/' + areaCod + '/' + subjectCod + '/' + groupCod,
      {headers: this.header.buildHeaderToken()});
  }

  updateLoadTeacher(areaCod: number, subjectCod: number, groupCod: number, data) {
    return this.http.put(this.endpoint + '/teacher_load/' + areaCod + '/' + subjectCod + '/' + groupCod, JSON.stringify(data),
      {headers: this.header.buildHeaderToken()});
  }

  getTeacherLoadRequest(): Observable<any> {
    return this.http.get(this.endpoint + '/teacher_load/request', {headers: this.header.buildHeaderToken()});
  }

  updateTeacherLoadRequest(areaCod: any, subjectCod: any, groupCod: any, teacherDni: any, data): Observable<any> {
    return this.http.put(this.endpoint + '/teacher_load/' + areaCod + '/' + subjectCod + '/' + groupCod + '/' + teacherDni,
      JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  /**
   * TEACHER
   * */

  getTeacher(dni: number) {
    return this.http.get(this.endpoint + '/teacher/' + dni, {headers: this.header.buildHeaderToken()});
  }

  updateTeacher(dni: string, data: any) {
    return this.http.put(this.endpoint + '/teacher/' + dni, JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  deleteTeacher(dni: any): Observable<any> {
    return this.http.delete(this.endpoint + '/teacher/' + dni, {headers: this.header.buildHeaderToken()});
  }

  getListTeacher() {
    return this.http.get(this.endpoint + '/teachers', {headers: this.header.buildHeaderToken()});
  }

  getListTutorial(): Observable<any> {
    return this.http.get(this.endpoint + '/teacher/tutorial', {headers: this.header.buildHeaderToken()});
  }

  getTutorial(dni): Observable<any> {
    return this.http.get(this.endpoint + '/teacher/tutorial/' + dni, {headers: this.header.buildHeaderToken()});
  }

  createTutorial(data, dni): Observable<any> {
    return this.http.post(this.endpoint + '/teacher/tutorial/' + dni, JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  /**
   * USER
   * */

  getUser(username): Observable<any> {
    return this.http.get(this.endpoint + '/user/' + username, {headers: this.header.buildHeaderToken()});
  }

  createUser(data): Observable<any> {
    return this.http.post(this.endpoint + '/sign-in', JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  deleteUser(username: any): Observable<any> {
    return this.http.delete(this.endpoint + '/user/' + username, {headers: this.header.buildHeaderToken()});
  }

  updateUser(username: any, data: any): Observable<any> {
    return this.http.put(this.endpoint + '/user/' + username, JSON.stringify(data), {headers: this.header.buildHeaderToken()});
  }

  getListUser(): Observable<any> {
    return this.http.get(this.endpoint + '/users', {headers: this.header.buildHeaderToken()});
  }
}
