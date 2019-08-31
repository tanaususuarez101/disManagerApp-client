import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RestService} from '../../../services/rest.service';

declare const $: any;

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {
  private title = 'Añadir usuario';
  private tableUserHeader = ['Username', 'Admin', 'Profesor'];
  private tableTeacherHeader = ['DNI', 'Nombe', 'Apellidos'];
  private tableUser: any = [];
  private teacherList: any = [];
  private availableTeacherList: any = [];

  private valueRadioButton: any;

  constructor(private  formBuilder: FormBuilder, private rest: RestService) {}

  ngOnInit() { this.loadList(); }
  newUser() { $('#modal-new-user').modal('show'); }
  loadTeacherList() { $('#modal-load-teacher-list').modal('show'); }
  alertDelete() { $('#modal-alert').modal('show'); }

  loadList() {
    this.valueRadioButton = null;

    this.rest.getListUser().subscribe(users => {
      this.tableUser = users;
      this.rest.getListTeacher().subscribe(teachers => {
        this.teacherList = teachers;
        this.availableTeacherList = this.teacherList.filter(value => {
          for (let user of users) { if (user.teacher_dni === value.teacher_dni) return false; }
          return true;
        });
      });
    });
  }

  buttonEdit() {
    if (this.valueRadioButton == null) return;
    if (this.valueRadioButton.teacherSelected != null) { $('#modal-teacher-edit').modal('show'); } else
    if (this.valueRadioButton.userSelected != null) { $('#modal-user-edit').modal('show'); }
  }



  confirmDelete($event: boolean) {
    if ($event) {
      if (this.valueRadioButton.userSelected != null) {
        this.rest.deleteUser(this.valueRadioButton.userSelected.username).subscribe(value => this.loadList());
      } else {
        this.rest.deleteTeacher(this.valueRadioButton.teacherSelected.teacher_dni).subscribe(value => this.loadList());
      }
    }
  }

  update() { this.loadList(); }
}
