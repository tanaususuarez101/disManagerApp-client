import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../../services/rest.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {


  private signInForm: any;
  private isTeacher = false;

  constructor(private formBuilder: FormBuilder, private rest: RestService) { }

  ngOnInit() {
    this.createUserForm();
  }

  selectedTeacher(event) {
    this.isTeacher = event.target.checked;
    this.createUserForm();
  }
  createUserForm() {

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
    this.rest.createUser(this.signInForm.value)
      .subscribe(
        resp => {
          alert('Usuario guardado');
        },
        err => {
          alert('ERROR AL GUARDAR EL USUARIO');
        }
      );
  }

}
