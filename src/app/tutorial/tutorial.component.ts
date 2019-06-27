import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  teachertutorial = [];
  fields = ['Profesor', 'Área de conocimiento', 'Horas totales', 'Horas cubiertas', 'Horas sin cubrir'];
  title = 'Tutorías';

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getTutorial().subscribe(
      data => this.teachertutorial = data
    );
    /*this.teacherDemands = [
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '-16'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '+3'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '0'},
      {teacher_name: 'Juan', area_name: 'Informática y sistemas', total_hours: '16', selected_hours: '16', unassigned_hours: '+4'}
    ];*/
  }

}
