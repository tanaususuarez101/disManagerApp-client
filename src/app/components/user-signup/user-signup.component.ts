import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {HttpEventType} from '@angular/common/http';
import {map} from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  private title = 'Añadir usuario';
  private tableUserHeader = ['Username', 'Admin', 'Profesor'];
  private tableTeacherHeader = ['DNI', 'Nombe', 'Apellidos'];
  private tableUser: any = [];
  private teacherList: any = [];

  private valueRadioButton: any;

  constructor(private  formBuilder: FormBuilder, private rest: RestService) {}

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.valueRadioButton = null;
    this.rest.getListTeacher().subscribe(data => this.teacherList = data);
    this.rest.getListUser().subscribe(data => this.tableUser = data);
  }

  buttonEdit() {
    if (this.valueRadioButton == null) return;
    if (this.valueRadioButton.username != null) {
      $('#modal-user-edit').modal('show');
    } else {
      $('#modal-teacher-edit').modal('show');
    }
  }

  newUser() {
    $('#modal-new-user').modal('show');
  }

  alertDelete() {
    $('#modal-alert').modal('show');
  }

  confirmDelete($event: boolean) {
    if ($event) {
      if (this.valueRadioButton.username != null) {
        this.rest.deleteUser(this.valueRadioButton.username).subscribe(value => this.loadList());
      } else {
        this.rest.deleteTeacher(this.valueRadioButton.teacher_dni).subscribe(value => this.loadList());
      }
    }
  }

  update() {
    this.loadList();
  }
}
