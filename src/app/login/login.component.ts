import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormBuilder, Validators} from '@angular/forms';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() request = new EventEmitter();
  private submitted: boolean;
  loginForm: any;

  constructor(public storage: StorageService,
              public auth: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
  }

  get f() { return this.loginForm.controls; }

  confirmLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.login(this.loginForm.value).subscribe(
      data => {
        console.log(data);
        this.storage.setCurrentUser(data.token);
        this.storage.setUser(data.user);
        this.request.emit(true);
      }
    );
  }
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
