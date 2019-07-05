import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormBuilder} from '@angular/forms';
import {StorageService} from '../storage.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() request = new EventEmitter();
  loginForm: any;

  constructor(public storage: StorageService,
              public auth: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
  }

  confirmLogin() {
    this.auth.login(this.loginForm.value).subscribe(
      token => {
        console.log(token.token);
        this.storage.setCurrentUser(token.token);
        this.request.emit(true);
        console.log(this.storage.isAuthenticated());
      }
    );
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }
}
