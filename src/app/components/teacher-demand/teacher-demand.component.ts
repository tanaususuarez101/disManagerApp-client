import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-teacher-demand',
  templateUrl: './teacher-demand.component.html',
  styleUrls: ['./teacher-demand.component.scss']
})
export class TeacherDemandComponent implements OnInit {

  title = 'Demanda docente';
  fields = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir'];
  teacherDemands = [];
  filterSubject: any;
  filterOption: any;

  constructor(public rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.rest.getGroups()
      .subscribe(subjects =>    this.teacherDemands = subjects);
  }
}
