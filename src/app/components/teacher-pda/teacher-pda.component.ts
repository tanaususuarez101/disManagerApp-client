import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-pda',
  templateUrl: './teacher-pda.component.html',
  styleUrls: ['./teacher-pda.component.scss']
})
export class TeacherPDAComponent implements OnInit {

  title = 'Proyecto docente';
  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Coordinador', 'Estado'];
  teacherHistory = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.getPDAs()
      .subscribe(
      data => this.teacherHistory = data,
        err => {
          if (err.status == 401) {
            this.router.navigate(['/login']);
          }
        }
    );
  }
}
