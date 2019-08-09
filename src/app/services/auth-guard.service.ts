import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticationService} from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {

    this.auth.getCurrent(this.auth.getToken())
      .subscribe(
        data => {
        },
        err => {
          alert('Sessión caducada, por favor, vuelva a iniciarla');
          this.router.navigate(['/login']);
          this.auth.logout();
        }
      );
    return true;
  }
}
