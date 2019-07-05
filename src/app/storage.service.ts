import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router: Router) {}

  setCurrentUser(token): void {
    window.localStorage.setItem('currentUser', JSON.stringify(token));
  }
  removeCurrentUser(): void {
    window.localStorage.removeItem('currentUser');
  }
  getCurrentUser() {
    return window.localStorage.getItem('currentUser');
  }
  isAuthenticated(): boolean {
    return (this.getCurrentUser() != null) ? true : false;
  }

}

