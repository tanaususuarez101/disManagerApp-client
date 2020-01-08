import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {concatAll, concatMap, map} from 'rxjs/operators';
import {forkJoin, from, Observable, of} from 'rxjs';
import {subscribeToObservable, subscribeToPromise} from 'rxjs/internal-compatibility';
import {TeacherDemandComponent} from '../../pdo/teacher-demand/teacher-demand.component';
import {send} from 'q';

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
  private filterSubject: any;

  private deleteBtnAvailable = false;
  private loadDeleterIcon = false;
  private loadSaveIcon = false;



  private orderHours = [
    {id: 'radioHours1', name: 'Sin cubrir', value: 'uncovered', checked: false },
    {id: 'radioHours2', name: 'Excedidas', value: 'exceeded', checked: false },
    {id: 'radioHours3', name: 'Cubiertas', value: 'cover', checked: false },
  ];

  private orderArea: any;

  constructor(private rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.orderArea = TeacherDemandComponent.orderMyArea(this.user.area_cod);
    this.loadData();
  }

  private loadData() {
    forkJoin(
      this.loadGroups(),
      this.loadTeacher()
    )
    .subscribe(value => {
        this.teacherGroupsConfirm = value[1];
        this.groups = value[0].filter(teaGrp => !this.teacherGroupsConfirm.find(val => this.compareGroup(val, teaGrp)) );
        this.loadDeleterIcon = false;
        this.calculatorHoursImpart();
    });
  }

  private loadGroups() {
    return this.rest.getGroups()
      .pipe(
        map(data => {
          // tslint:disable-next-line:no-shadowed-variable
          return data.map(element => {
            element.area_acronym = TeacherDemandComponent.typeOfArea(element.area_cod);
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
            element.area_acronym = TeacherDemandComponent.typeOfArea(element.area_cod);
            element.impart_hours = +element.assigned_hours;
            return element;
          });
        })
      );
  }

  private clickChanger($event, item) {
    if ($event.value > $event.max) {
      $event.value = $event.max;
      item.impart_hours = $event.max;
    }

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
    this.loadDeleterIcon = true; this.deleteBtnAvailable = false; this.allSelected = false;

    const listDelete = this.teacherGroupsConfirm
      .filter(val => val.activedChanger)
      .map(val => {
        return {
          area_cod: val.area_cod,
          subject_cod: val.subject_cod,
          group_cod: val.group_cod
        };
      });

    this.sendDeleteGroup(listDelete).subscribe(res => { this.loadData(); this.loadDeleterIcon = false; });

  }

  private updateChange() {
    this.loadSaveIcon = true;
    this.confirmSelection();
    this.updateGroup();
  }

  /*
   * auxiliary function
   * */

  private confirmSelection() {
    const sendData = this.groups
      .filter(value => value.impart_hours > 0.1 )
      .map(value => {
        return { area_cod: value.area_cod, subject_cod: value.subject_cod, group_cod: value.group_cod, impart_hours: value.impart_hours };
      });
    this.sendSelectionGroups(sendData)
      .subscribe(
        val => this.loadData(),
        err => alert('ERROR al confirmar los grupos'),
        () => this.loadSaveIcon = false
      );
  }

  private updateGroup() {
    const dataForSend = this.teacherGroupsConfirm
      .filter(val => val.impart_hours > 0.1)
      .map(val => {
        return { area_cod: val.area_cod, subject_cod: val.subject_cod, group_cod: val.group_cod, impart_hours: val.impart_hours };
      });

    this.sendUpdateGroups(dataForSend)
      .subscribe(
        res => this.loadData(),
        err => alert('Error al actualizar los datos: ' + err.message),
        () => this.loadSaveIcon = false
      );
  }

  private sendSelectionGroups(dataForSend): Observable<any> {
    return from(dataForSend).pipe( concatMap(value => this.rest.createTeacherLoad(value)) );
  }

  private sendDeleteGroup(dataForSend): Observable<any> {
    return from(dataForSend).pipe(
      concatMap(data => this.rest.deleteLoadTeacher(data['area_cod'], data['subject_cod'], data['group_cod']))
    );
  }

  private sendUpdateGroups(dataForSend): Observable<any> {
    return from(dataForSend).pipe(
      concatMap(val =>
        this.rest.updateLoadTeacher(val['area_cod'], val['subject_cod'], val['group_cod'], {impart_hours: val['impart_hours']}))
    );
  }

  private compareGroup(g1, g2): boolean {
    return g1.area_cod === g2.area_cod && g1.subject_cod === g2.subject_cod && g1.group_cod === g2.group_cod;
  }

  /*
  * changer checkbox
  * */

  private selectedAll($event) {
    this.deleteBtnAvailable = $event.target.checked;
    this.allSelected = $event.target.checked;
    this.teacherGroupsConfirm = this.teacherGroupsConfirm.map(val => {val.activedChanger = $event.target.checked; return val; });
    // for (const group of this.teacherGroupsConfirm) { group.activedChanger = $event.target.checked; }
  }

  private changeCheckboxItem($event) {
    if (!$event.target.checked && this.allSelected) { this.allSelected = !this.allSelected; }
    if (this.activedAllInput()) { this.allSelected = true; }

    const value = this.teacherGroupsConfirm.find(val => val.activedChanger);
    this.deleteBtnAvailable = !!value;

  }

  private activedAllInput(): boolean {
    const value = this.teacherGroupsConfirm.find(val => !val.activedChanger );
    return !value;
  }

}
