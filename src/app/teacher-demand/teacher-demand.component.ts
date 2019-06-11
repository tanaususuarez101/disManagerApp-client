import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-teacher-demand',
  templateUrl: './teacher-demand.component.html',
  styleUrls: ['./teacher-demand.component.scss']
})
export class TeacherDemandComponent implements OnInit {

  teacherDemands = [];
  fields = ['Titulación', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas cubiertas'];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.teacherDemands = [
      {groups: [{group_cod: '1', type: 'practica de aula', group_id: 1}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'INFORMÁTICA', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},
      {groups: [{group_cod: '1', type: 'practica de aula', group_id: 3}, {group_cod: '2', type: 'practica de aula', group_id: 4}],
        course: '1', name: 'INFORMÁTICA', semester: '1', subject_cod: '40304', type: 'Básica Rama',
        university_degree_cod: '4003', university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'}
    ];
    /*
    this.rest.getAllSubjects().subscribe(
      subjects => {
        this.teacherDemands = subjects;
        console.log(this.teacherDemands);
      }
    );
     */
  }

  detailsSubject(cod) {
    console.log('Boton pulsado: ' + cod);
  }
}
