import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {map} from 'rxjs/operators';
import {element} from 'protractor';
import {Observable} from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-user-subject',
  templateUrl: './user-subject.component.html',
  styleUrls: ['./user-subject.component.scss']
})
export class MySubjectComponent implements OnInit {

  user: any;
  fieldsAvailable = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir',
    'H. Seleccionadas'];
  fieldTeacherGroups = ['Titulación', 'Área', 'Asignatura', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas', 'Estado' ];
  groups: any = [];
  teacherGroupsConfirm = [];
  selectedHours = 0;
  allSelected = false;
  deleteBtnAvailable = false;

  constructor(private rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadGroups();
  }

  private loadGroups() {
    this.rest.getGroups()
      .pipe(
        map(data => {
          // tslint:disable-next-line:no-shadowed-variable
          return data.map(element => {
            element.impart_hours = 0;
            element.cover_hours_provitional = +element.group_cover_hours;
            return element;
          });
        })
      )
      .subscribe(groups =>  {
        this.groups = groups;
        this.loadTeacher();
      });
  }

  private loadTeacher() {
    this.rest.getTeacherLoad(this.user.teacher_dni)
      .pipe(
        map(data => {
          // tslint:disable-next-line:no-shadowed-variable
          return data.groups.map(element => {
            element.impart_hours = +element.assigned_hours;
            element.activedChanger = false;
            return element;
          });
        })
      )
      .subscribe(data => {
        this.teacherGroupsConfirm = data;
        this.groups = this.groups.filter(teacherGroups => {
          for (const group of data) {
            if (group.area_cod === teacherGroups.area_cod && group.subject_cod === teacherGroups.subject_cod
              && group.group_cod === teacherGroups.group_cod) { return false; }
          }
          return true;
        });
        this.calculatorHoursImpart();
      });
  }

  private clickChanger($event) {
    for (const group of this.groups) { group.cover_hours_provitional = +group.group_cover_hours + +group.impart_hours; }
    this.calculatorHoursImpart();
  }

  calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.groups) { this.selectedHours += +group.impart_hours; }
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.impart_hours; }
  }

  deleteGroup() {

    for ( const group of this.teacherGroupsConfirm) {
      if (group.activedChanger) {
        this.rest.deleteLoadTeacher(group.area_cod, group.subject_cod, group.group_cod)
          .subscribe(
            data => {
              this.loadGroups();
            },
          );
      }
    }
  }

  updateChange() {
    this.confirmSelection();
    this.updateGroup();
  }

  confirmSelection() {
    const sendData = this.groups
      .filter(value => value.impart_hours > 0 )
      .map(value => {
        return {
          area_cod: value.area_cod,
          subject_cod: value.subject_cod,
          group_cod: value.group_cod,
          impart_hours: value.impart_hours
        };
      });

    this.rest.createTeacherLoad(sendData)
      .subscribe(
        result =>  {
          this.loadTeacher();
        }
      );
  }

  updateGroup() {
    // tslint:disable-next-line:no-shadowed-variable
    for ( const element of this.teacherGroupsConfirm) {
      if (element.impart_hours < 0.5) { continue; }

      element.updateActiveLoad = true;
      this.rest.updateLoadTeacher(element.area_cod, element.subject_cod, element.group_cod, {hours: element.impart_hours})
        .subscribe(
          data => {
            this.loadTeacher();
          },
          err => {
            element.updateActiveLoad = false;
          });
    }
  }

  selectedAll($event) {
    this.deleteBtnAvailable = $event.target.checked;
    this.allSelected = $event.target.checked;
    for (const group of this.teacherGroupsConfirm) { group.activedChanger = $event.target.checked; }

  }

  changeCheckboxItem($event) {
    if (!$event.target.checked && this.allSelected) { this.allSelected = !this.allSelected; }
    if (this.checkedAllInput()) { this.allSelected = true; }
    for (const group of this.teacherGroupsConfirm) { if (group.activedChanger) { this.deleteBtnAvailable = true; break; } else { this.deleteBtnAvailable = false; } }
  }

  private checkedAllInput(): boolean {
    for (const group of this.teacherGroupsConfirm) { if (!group.activedChanger) { return false; } }
    return true;
  }
}
