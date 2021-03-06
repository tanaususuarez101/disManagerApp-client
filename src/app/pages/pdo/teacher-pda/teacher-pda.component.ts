import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {TeacherDemandComponent} from '../teacher-demand/teacher-demand.component';

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
      .pipe(map(data => {
        for ( const subject of data) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
        return data;
      }))
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
