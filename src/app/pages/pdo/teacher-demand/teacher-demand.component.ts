import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-teacher-demand',
  templateUrl: './teacher-demand.component.html',
  styleUrls: ['./teacher-demand.component.scss']
})
export class TeacherDemandComponent implements OnInit {

  title = 'Demanda docente';
  fields = ['Titulación', 'Área', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir'];

  teacherDemands = [];
  teacherDemandsOrigin = [];

  filterSubject: any;

  orderHours = [
    {id: 'radioHours1', name: 'Sin cubrir', value: 'uncovered', checked: false },
    {id: 'radioHours2', name: 'Excedidas', value: 'exceeded', checked: false },
    {id: 'radioHours3', name: 'Cubiertas', value: 'cover', checked: false },
  ];

  orderArea = [
    {id: 'radioArea1', name: 'Arq. y tec. de Computadores', value: 'ATC', checked: false },
    {id: 'radioArea2', name: 'Ciencia de la Comp. e Intel. Artificial', value: 'CCIA', checked: false },
    {id: 'radioArea3', name: 'Len. y sis. Informáticos', value: 'LSI', checked: false },
  ];

  constructor(public rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.rest.getGroups() .subscribe(subjects => { this.teacherDemands = subjects; this.teacherDemandsOrigin = subjects; });
  }
}
