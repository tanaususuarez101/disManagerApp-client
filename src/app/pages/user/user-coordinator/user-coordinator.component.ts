import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {concatMap, findIndex, map, mergeAll, switchMap} from 'rxjs/operators';
import {element} from 'protractor';
import {TeacherDemandComponent} from '../../pdo/teacher-demand/teacher-demand.component';
import {forkJoin, from, Observable} from 'rxjs';
import set = Reflect.set;

@Component({
  selector: 'app-user-coordinator',
  templateUrl: './user-coordinator.component.html',
  styleUrls: ['./user-coordinator.component.scss']
})
export class UserCoordinatorComponent implements OnInit {

  private fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Semestre', 'Coordinador de asignatura', 'Responsable de prácticas'];
  private title = 'Coordinadores';
  private user: any;
  private subjectlist: any = [];

  constructor(public rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadData();
  }

  private loadData() {
    const dni = this.user.teacher_dni;
    // Get all teacher subject
    forkJoin(
      this.rest.getTeacherLoad(dni).pipe(map(value => value.groups)),
      this.rest.getSubjects().pipe(map(value => value['subject'])),
      this.rest.getSubjectCoordinator(dni),
      this.rest.getSubjectResponsible(dni)
    )
    .subscribe(array => {
      const impartSubjects = this.setArray(array[0]);
      this.subjectlist = array[1]
        .filter(sub => impartSubjects.find(subImp => this.equals(subImp, sub)))
        .map(subject => {
          subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod);
          subject.coordinator = this.subjectSelected(array[2], subject);
          subject.responsible = this.subjectSelected(array[3], subject);
          return subject;
        });

    });
  }

  private subjectSelected(data: any = [], subject: any) {
    return !!data.find(value => this.equals(value, subject));
  }

  private setArray(array: any = []) {
    const setValue = [];
    for (const val of array) {
      if ( !setValue.find(res =>  this.equals(res, val) ) ) { setValue.push(val); }
    }
    return setValue;
  }

  private equals(s1: any, s2: any) {
    return (s1.area_cod === s2.area_cod) && (s1.subject_cod === s2.subject_cod);
  }

  private saveData() {

    const subjectCoor = this.subjectlist
      .filter(subject => subject.coordinator)
      .map(subject => ( {subject_cod: subject.subject_cod, area_cod: subject.area_cod} ));

    const subjectResp = this.subjectlist
      .filter(subject => subject.responsible)
      .map(subject => ( {subject_cod: subject.subject_cod, area_cod: subject.area_cod} ));

    forkJoin(
      this.rest.createSubjectCoordinator(this.user.teacher_dni, subjectCoor),
      this.rest.createSubjectResponsible(this.user.teacher_dni, subjectResp)
    )
    .subscribe(
      rest => { this.loadData(); alert('¡Datos actualizados!'); },
      err => {alert('ERROR: ' + err.error.message); console.log(err); }
    );

  }



}
