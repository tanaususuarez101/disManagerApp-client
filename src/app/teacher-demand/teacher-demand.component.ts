import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-teacher-demand',
  templateUrl: './teacher-demand.component.html',
  styleUrls: ['./teacher-demand.component.scss']
})
export class TeacherDemandComponent implements OnInit {

  title = 'Demanda docente';
  fields = ['Titulación', 'Asignatura', 'Curso', 'Semestre', 'Grupo', 'Tipo', 'Horas', 'Horas cubiertas'];
  teacherDemands = [];
  filterSubject: any;

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.teacherDemands = [
      {groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'INFORMÁTICA', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},
      {groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'ANALISIS MATEMATICO', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},
      {groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'ALGEBRA', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},
      {groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'PROGRAMACION', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},{groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'ESTRUCTURA DE COMPUTADORES', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},{groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'SEGURIDAD', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},{groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'SERVICIOS', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'},{groups: [{group_cod: '1', type: 'practica de aula',}, {group_cod: '2', type: 'practica de aula', group_id: 2}],
        course: '1', name: 'DESARROLLO WEB', semester: '1', subject_cod: '40304', type: 'Básica Rama', university_degree_cod: '4003',
        university_degrees_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán'}
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


}
