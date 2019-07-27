import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  title = 'Añadir usuario';
  isTeacher = false;
  private signInForm: any;

  constructor(private  formBuilder: FormBuilder, private rest: RestService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {

    if (this.isTeacher) {
      this.signInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        dni: ['', Validators.required],
        name: [''],
        surnames: [''],
        area_cod: [''],
        potential: [''],
        tutorial_hours: [''],
        admin: [false]
      });
    } else {
      this.signInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        admin: [false]
      });
    }
  }

  addNewUser() {
    console.log(this.signInForm.value);
    this.rest.postUser(this.signInForm.value)
      .subscribe(
        resp => console.log('Respeusta: ', resp),
        err => console.log('ERROR: ', err)
      );

  }

}
