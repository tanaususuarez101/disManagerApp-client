import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-history',
  templateUrl: './teacher-history.component.html',
  styleUrls: ['./teacher-history.component.scss']
})
export class TeacherHistoryComponent implements OnInit {

  fields = ['Titulación', 'Asignatura', 'Tipo', 'Semestre'];
  teacherHistory = [];

  constructor() { }

  ngOnInit() {
    this.teacherHistory = [
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'INFORMÁTICA', subject_cod: 4003,
        type: 'Obligatoria', semester: 1},
      {university_degree_name: 'Grado en Ingeniería informática', subject_name: 'ÁLGEBRA', subject_cod: 4004, type: 'Obligatoria',
        semester: 1},
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'INFORMÁTICA', subject_cod: 4008,
        type: 'Obligatoria', semester: 1},
    ];
  }

}
