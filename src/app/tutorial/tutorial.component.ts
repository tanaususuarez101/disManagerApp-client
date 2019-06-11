import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  teacherDemands = [];
  fields = ['Profesor', 'Área de conocimiento', 'Horas totales', 'Horas cubiertas', 'Horas sin cubrir'];

  constructor() { }

  ngOnInit() {
    this.teacherDemands = [
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'}
    ];
  }

}
