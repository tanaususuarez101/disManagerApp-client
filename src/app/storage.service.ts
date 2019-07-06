import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  setCurrentUser(token): void {
    window.localStorage.setItem('currentUser', JSON.stringify(token));
  }
  setUser(user): void {
    window.localStorage.setItem('user', JSON.stringify(user));
  }
  removeCurrentUser(): void {
    window.localStorage.removeItem('currentUser');
  }
  removeUser(): void {
    window.localStorage.removeItem('user');
  }
  getCurrentUser() {
    return window.localStorage.getItem('currentUser').replace(/["']/g, '');
  }
  getUser() {
    return JSON.parse(window.localStorage.getItem('user'));
  }
  isAuthenticated(): boolean {
    return (this.getCurrentUser() != null) ? true : false;
  }

}

