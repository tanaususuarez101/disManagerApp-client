import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-coordinator',
  templateUrl: './subject-coordinator.component.html',
  styleUrls: ['./subject-coordinator.component.scss']
})
export class SubjectCoordinatorComponent implements OnInit {

  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Tipo', 'Semestre', 'Coordinador'];
  coordinator = [];


  constructor() { }

  ngOnInit() {
    this.coordinator = [
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'Informática',
        knowledge_area: 'Informatica y computación', type: 'Obligatoria', semester: '16', coordinate: 'Juan, Del carmen Sosa',
        subject_coordinate: false, practical_coordinate: true},
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'Informática',
        knowledge_area: 'Informatica y computación', type: 'Obligatoria', semester: '16', coordinate: 'Juan, Del carmen Sosa',
        subject_coordinate: false, practical_coordinate: true},
      {university_degree_name: 'Grado en Traduc. e Interpretación: Inglés-Alemán', subject_name: 'Informática',
        knowledge_area: 'Informatica y computación', type: 'Obligatoria', semester: '16', coordinate: 'Juan, Del carmen Sosa',
        subject_coordinate: true, practical_coordinate: false},
    ];
  }

}
