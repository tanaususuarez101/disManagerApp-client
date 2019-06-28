import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-teacher-load',
  templateUrl: './teacher-load.component.html',
  styleUrls: ['./teacher-load.component.scss']
})
export class TeacherLoadComponent implements OnInit {

  constructor(public rest: RestService) { }

  teacherloads = [];
  /*fields = ['Profesor', 'Área', 'Potencial A', 'Potencial B', 'Total horas a cubrir', 'Docencia Master', 'Docencia Doctorado',
    'Docencia Pr. externas', 'Horas a cubrir'];*/
  fields = ['Profesor', 'Área', 'Potencial', 'Horas cubiertas', 'Horas sin cubrir'];
  title = 'Carga docente';
  filterTeacher: any;

  ngOnInit() {
    this.rest.getTeacherLoad().subscribe(
      data => {
        this.teacherloads = data;
        console.log(data);
      }
    );
    /*this.teacherloads = [
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 1},
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 2},
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 3},
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 4}
    ];*/
  }

}
