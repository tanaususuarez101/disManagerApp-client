import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    if (this.auth.getUser()) {
      // login TRUE
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
