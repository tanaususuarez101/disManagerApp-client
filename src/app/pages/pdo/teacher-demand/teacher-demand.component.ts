import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-teacher-demand',
  templateUrl: './teacher-demand.component.html',
  styleUrls: ['./teacher-demand.component.scss']
})
export class TeacherDemandComponent implements OnInit {

  constructor(public rest: RestService, private  auth: AuthenticationService) { }

  title = 'Demanda docente';
  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas sin cubrir'];

  teacherDemands = [];
  filterSubject: any;

  orderHours = [
    {id: 'radioHours1', name: 'Sin cubrir', value: 'uncovered', checked: false },
    {id: 'radioHours2', name: 'Excedidas', value: 'exceeded', checked: false },
    {id: 'radioHours3', name: 'Cubiertas', value: 'cover', checked: false },
  ];

  orderArea: any;

  static typeOfArea(areaCod: string | number): string {
    switch (areaCod) {
      case '35':
        return 'ATC';
      case '75':
        return 'CCIA';
      case '570':
        return 'LSI';
    }
  }

  static orderMyArea(areaCod: string | number) {
    const orderArea = [
      {id: 'radioArea1', name: 'ATC', value: 'ATC', areaCod: '35', checked: false },
      {id: 'radioArea2', name: 'CCIA', value: 'CCIA', areaCod: '75', checked: false },
      {id: 'radioArea3', name: 'LSI', value: 'LSI', areaCod: '570', checked: false },
    ];
    for (const order of orderArea) {  if (order.areaCod === areaCod) { order.checked = true; } }
    return orderArea;
  }

  ngOnInit() {
    this.orderArea = TeacherDemandComponent.orderMyArea(this.auth.getUser().area_cod);
    this.rest.getGroups()
      .pipe(map(data => {
        for ( const subject of data) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
        return data;
      }))
      .subscribe(subjects => this.teacherDemands = subjects);
  }
}
