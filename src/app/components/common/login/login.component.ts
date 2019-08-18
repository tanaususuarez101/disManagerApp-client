import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private submitted: boolean;
  loginForm: any;
  private activateLoad: boolean;

  constructor(public auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
    const token = this.auth.getToken();
    if (token) {
      this.auth.getCurrent(token)
        .subscribe(
          data => this.router.navigate(['dashboard/teacher-demand']),
          err => {}
        );
    }
  }

  get f() { return this.loginForm.controls; }

  confirmLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.activateLoad = true;
    this.auth.login(this.loginForm.value)
      .subscribe(
      data => {
        this.auth.setToken(data.token);
        this.auth.setUser(data.user);
        this.router.navigate(['/dashboard/teacher-demand']);

      },
      error => {
        this.activateLoad = false;
        const element = document.getElementById('alert-login');
        if (element != null) {
          element.innerHTML = '<div class="alert alert-danger alert-dismissible fade show" role="alert">\n' +
            'Usuario o contraseña incorrecto' +
            '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
            '    <span aria-hidden="true">&times;</span>\n' +
            '  </button>\n' +
            '</div>';
        }
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
