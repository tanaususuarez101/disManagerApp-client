import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-pda',
  templateUrl: './teacher-pda.component.html',
  styleUrls: ['./teacher-pda.component.scss']
})
export class TeacherPDAComponent implements OnInit {

  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Coordinador', 'Estado'];
  teacherHistory = [];

  constructor() { }

  ngOnInit() {
    this.teacherHistory = [
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'INFORMÁTICA', knowledge_area: 'Info',
        coordinator: 'Sosa Martín, Juan', state: 'Aprobado'},
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'INFORMÁTICA', knowledge_area: 'Info',
        coordinator: 'Pedra Dolores, María', state: 'Aprobado'},
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'INFORMÁTICA', knowledge_area: 'Info',
        coordinator: 'Martín Dolores, Carmen', state: 'Aprobado'},
    ];
  }
}
