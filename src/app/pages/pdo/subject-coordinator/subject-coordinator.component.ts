import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {TeacherDemandComponent} from '../teacher-demand/teacher-demand.component';

@Component({
  selector: 'app-subject-coordinator',
  templateUrl: './subject-coordinator.component.html',
  styleUrls: ['./subject-coordinator.component.scss']
})
export class SubjectCoordinatorComponent implements OnInit {

  fields = ['Titulación',  'Asignatura', 'Área de conocimiento', 'Tipo', 'Semestre', 'Coordinador'];
  title = 'Coordinadores';

  coordinator = [];
  responsible = [];


  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.getSubjectCoordinators()
      .subscribe(subjects =>  this.coordinator = subjects.map(subject => {
        subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod);
        return subject;
      }));

    this.rest.getSubjectResponsibles()
      .subscribe(subjects =>  this.responsible = subjects.map(subject => {
        subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod);
        return subject;
      }));
  }

}
