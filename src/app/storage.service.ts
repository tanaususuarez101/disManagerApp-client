import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  setCurrentUser(token): void {
    console.log('token recibido:', token);
    window.localStorage.setItem('currentUser', JSON.stringify(token));
    console.log('token guardado:', this.getCurrentUser());
  }
  removeCurrentUser(): void {
    window.localStorage.removeItem('currentUser');
  }
  getCurrentUser() {
    return window.localStorage.getItem('currentUser').replace(/["']/g, "");

  }
  isAuthenticated(): boolean {
    return (this.getCurrentUser() != null) ? true : false;
  }

}

