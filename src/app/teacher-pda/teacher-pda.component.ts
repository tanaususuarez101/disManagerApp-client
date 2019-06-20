import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-teacher-pda',
  templateUrl: './teacher-pda.component.html',
  styleUrls: ['./teacher-pda.component.scss']
})
export class TeacherPDAComponent implements OnInit {

  title = 'Proyecto docente';
  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Coordinador', 'Estado'];
  teacherHistory = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getAllPDA().subscribe(
      data => this.teacherHistory = data
    );
  }
}
