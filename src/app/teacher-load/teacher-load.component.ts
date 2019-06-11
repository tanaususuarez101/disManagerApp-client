import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-load',
  templateUrl: './teacher-load.component.html',
  styleUrls: ['./teacher-load.component.scss']
})
export class TeacherLoadComponent implements OnInit {

  constructor() { }

  teacherloads = [];
  fields = ['Profesor', 'Área', 'Potencial A', 'Potencial B', 'Total horas a cubrir', 'Docencia Master', 'Docencia Doctorado',
    'Docencia Pr. externas', 'Horas a cubrir'];

  ngOnInit() {
    this.teacherloads = [
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 1},
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 2},
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 3},
      {teacher_name: 'Juan', area_name: 'Informática', potential_A: '16', potential_B: '16', total_hours: '16',
        master_teacher: '8', doctorate_teacher: 'null', practical_teacher: 'null', unassigned_hours: 'null', teacher_id: 4}
    ];
  }

}
