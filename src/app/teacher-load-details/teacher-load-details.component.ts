import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-teacher-load-details',
  templateUrl: './teacher-load-details.component.html',
  styleUrls: ['./teacher-load-details.component.scss']
})
export class TeacherLoadDetailsComponent implements OnInit {

  teacherLoads = [];
  fields = ['Titulación', 'Asignatura', 'Curso', 'Tipo', 'Semestre', 'Tipo de grupo', 'Nº Grupo', 'Horas en solicitud'];

  constructor(private route: ActivatedRoute, public rest: RestService) { }

  ngOnInit() {
    this.teacherLoad();
  }

  private teacherLoad() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rest.getGroupTeacher(id).subscribe(
      data => this.teacherLoads = data
    );
    /*
    this.teacherLoads = [
      {university_degree: 'Grado en Ingeniería Informática', subject_name: 'INFORMÁTICA', subject_course: 1, subject_type: 'Obligatoria',
      semester: 1, group_type: 'Práctica de aula', group_cod: 17, request_hours: 16},
      {university_degree: 'Grado en Ingeniería Informática', subject_name: 'ÁLGEBRA', subject_course: 1, subject_type: 'Obligatoria',
        semester: 1, group_type: 'Práctica de aula', group_cod: 17, request_hours: 16},
    ];
    */
    console.log('Carga docente: ', id);
  }
}
