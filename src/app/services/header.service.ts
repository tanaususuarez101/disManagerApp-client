import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private auth: AuthenticationService ) { }

  buildHeaderToken() {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'x-access-token': this.auth.getToken()
    });
  }
  builHeaderFile() {
    return new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'x-access-token': this.auth.getToken()
    });
  }
}
