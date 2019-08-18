import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {map} from 'rxjs/operators';
import {element} from 'protractor';

declare const $: any;

@Component({
  selector: 'app-user-subject',
  templateUrl: './user-subject.component.html',
  styleUrls: ['./user-subject.component.scss']
})
export class MySubjectComponent implements OnInit {

  user: any;
  fieldsAvailable = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas'];
  fieldTeacherGroups = ['Titulación', 'Área', 'Asignatura', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas', 'Estado',
    'Actualizar', 'Eliminar' ];
  groups: any = [];
  teacherGroupsConfirm = [];
  selectedHours = 0;
  changerActiveLoad = false;
  changeMade = false;



  constructor(private rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    //$('body').tooltip({ selector: '[data-toggle=tooltip]' });
    this.user = this.auth.getUser();
    this.loadGroups();
  }

  private loadGroups() {
    this.rest.getGroups()
      .pipe(
        map(data => {
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
          return data.groups.map(element => {
            element.impart_hours = +element.assigned_hours;
            element.deleteActiveLoad = false;
            element.updateActiveLoad = false;
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

  confirmSelection() {
    this.changeMade = false;
    this.changerActiveLoad = true;
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
        result => {
          this.loadTeacher();
          this.changerActiveLoad = false;
      },
        err => {
          alert('ERROR: GRUPO AÑADIDO A LA CARGA DOCENTE');
          this.changerActiveLoad = false;
        }
      );
  }

  clickChanger($event) {
    this.changeMade = true;
    for (const group of this.groups) { group.cover_hours_provitional = +group.group_cover_hours + +group.impart_hours; }
    this.calculatorHoursImpart();
  }

  calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.groups) { this.selectedHours += +group.impart_hours; }
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.impart_hours; }
  }

  deleterGroup(element: any) {
    element.deleteActiveLoad = true;
    this.rest.deleteLoadTeacher(element.area_cod, element.subject_cod, element.group_cod)
      .subscribe(
        data => {
          this.loadGroups();
        },
        err => {
          element.deleteActiveLoad = false;
          alert('ERROR: ' + err.message);
        });
  }

  updateGroup(element: any) {
    console.log(element);
    if (element.impart_hours < 0.5) { return; }

    element.updateActiveLoad = true;
    this.rest.updateLoadTeacher(element.area_cod, element.subject_cod, element.group_cod, {hours: element.impart_hours})
      .subscribe(
        data => {
          this.loadTeacher();
        },
        err => {
          element.updateActiveLoad = false;
          alert('ERROR: ' + err.message);
        });
  }
}
