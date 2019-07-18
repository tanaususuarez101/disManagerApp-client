import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: any;
  private title = 'Perfil';
  private passwordForm: any;
  private submitted = false;
  private message: string;
  private classAlert: string;

  constructor(private auth: AuthenticationService,
              private  formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
    this.user = this.auth.getUser();
  }

  changerPassword() {
    this.submitted = true;

    if (this.passwordForm.invalid) {
      return;
    }

    if (this.passwordForm.value[ 'password' ] !== this.passwordForm.value[ 'passwordConfirm' ]) {
      this.message = 'La contraseña debe coincidir';
      this.classAlert = 'alert alert-danger';
      return;
    }

    this.auth.updateUser({'password': this.passwordForm.value[ 'password' ]})
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
