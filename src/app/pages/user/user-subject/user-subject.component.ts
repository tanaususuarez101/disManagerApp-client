import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {concatAll, concatMap, map} from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import {subscribeToObservable, subscribeToPromise} from 'rxjs/internal-compatibility';

declare const $: any;

@Component({
  selector: 'app-user-subject',
  templateUrl: './user-subject.component.html',
  styleUrls: ['./user-subject.component.scss']
})
export class MySubjectComponent implements OnInit {

  private user: any;
  private fieldsAvailable = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir',
    'H. Seleccionadas'];
  private fieldTeacherGroups = ['Titulación', 'Área', 'Asignatura', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir', 'H. Seleccionadas',
    'Estado' ];
  private groups: any = [];
  private teacherGroupsConfirm = [];
  private selectedHours = 0;
  private allSelected = false;
  private deleteBtnAvailable = false;
  private loadDeleterIcon = false;
  private loadSaveIcon = false;

  constructor(private rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadData();
  }

  private loadData() {
    forkJoin(
      this.loadGroups(),
      this.loadTeacher()
    )
    .subscribe(
      value => {
      this.groups = value[0];
      this.teacherGroupsConfirm = value[1];

      this.groups = this.groups.filter(teacherGroups => {
        for (const group of this.teacherGroupsConfirm) {
          if (group.area_cod === teacherGroups.area_cod && group.subject_cod === teacherGroups.subject_cod
            && group.group_cod === teacherGroups.group_cod) { return false; }
        }
        return true;
      });
      this.loadDeleterIcon = false;
      this.calculatorHoursImpart();
    });
  }

  private loadGroups() {
    return this.rest.getAvailableGroups()
      .pipe(
        map(data => {
          // tslint:disable-next-line:no-shadowed-variable
          return data.map(element => {
            element.impart_hours = 0;
            element.cover_hours_provitional = +element.group_cover_hours;
            return element;
          });
        })
      );
  }

  private loadTeacher() {
    return this.rest.getTeacherLoad(this.user.teacher_dni)
      .pipe(
        map(data => {
          // tslint:disable-next-line:no-shadowed-variable
          return data.groups.map(element => {
            element.impart_hours = +element.assigned_hours;
            return element;
          });
        })
      );
  }

  private clickChanger($event) {
    for (const group of this.groups) { group.cover_hours_provitional = +group.group_cover_hours + +group.impart_hours; }
    this.calculatorHoursImpart();
  }

  private calculatorHoursImpart() {
    this.selectedHours = 0;
    for (const group of this.groups) { this.selectedHours += +group.impart_hours; }
    for (const group of this.teacherGroupsConfirm) { this.selectedHours += +group.impart_hours; }
  }

  /*
   * Button function
   * */

  private deleteGroup() {
    this.loadDeleterIcon = true;
    this.deleteBtnAvailable = false;
    this.allSelected = false;
    for ( const group of this.teacherGroupsConfirm) {
      if (group.activedChanger) {
        this.rest.deleteLoadTeacher(group.area_cod, group.subject_cod, group.group_cod).subscribe(data => this.loadData());
      }
    }
  }

  private updateChange() {
    this.loadSaveIcon = true;
    this.confirmSelection();
    this.updateGroup();
  }

  private requestVenia() { $('#modal-request-venia').modal('show'); }

  /*
   * auxiliary function
   * */

  private confirmSelection() {
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
    this.rest.createTeacherLoad(sendData).subscribe( result => {this.loadSaveIcon = false; this.loadData(); },
        err => this.loadSaveIcon = false);
  }

  private updateGroup() {
    // tslint:disable-next-line:no-shadowed-variable
    for ( const element of this.teacherGroupsConfirm) {
      if (element.impart_hours < 0.5) { continue; }
      element.updateActiveLoad = true;
      this.rest.updateLoadTeacher(element.area_cod, element.subject_cod, element.group_cod, {hours: element.impart_hours})
        .subscribe( data => this.loadData(), err =>  alert('Error al guardar') );
    }
  }

  /*
  * changer checkbox
  * */

  private selectedAll($event) {
    this.deleteBtnAvailable = $event.target.checked;
    this.allSelected = $event.target.checked;
    for (const group of this.teacherGroupsConfirm) { group.activedChanger = $event.target.checked; }
  }

  private changeCheckboxItem($event) {
    if (!$event.target.checked && this.allSelected) { this.allSelected = !this.allSelected; }
    if (this.checkedAllInput()) { this.allSelected = true; }
    for (const group of this.teacherGroupsConfirm) {
      if (group.activedChanger) { this.deleteBtnAvailable = true; break; } else { this.deleteBtnAvailable = false; } }
  }

  private checkedAllInput(): boolean {
    for (const group of this.teacherGroupsConfirm) { if (!group.activedChanger) { return false; } }
    return true;
  }


}
