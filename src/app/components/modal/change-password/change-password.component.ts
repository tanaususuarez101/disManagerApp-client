import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {RestService} from '../../../services/rest.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  private passwordForm: any;
  private submitted = false;
  private message: string;
  private classAlert: string;
  private user: any;

  constructor(private  formBuilder: FormBuilder, private auth: AuthenticationService, private rest: RestService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.createLoginForm();
  }

  changerPassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) { return; }

    if (this.passwordForm.value[ 'password' ] !== this.passwordForm.value[ 'passwordConfirm' ]) {
      this.message = 'La contraseña debe coincidir';
      this.classAlert = 'alert alert-danger';
      return;
    }

    this.rest.updateUser(this.user.username, {'password': this.passwordForm.value[ 'password' ]})
      .subscribe(
        data => {
          this.message = 'Contraseña guardada satisfactoriamente';
          this.classAlert = 'alert alert-success';
        },
        err => {
          this.message = 'Ha existido algún error';
          this.classAlert = 'alert alert-danger';
        }
      );

  }

  get f() { return this.passwordForm.controls; }

  private createLoginForm() {
    this.passwordForm = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }
}
