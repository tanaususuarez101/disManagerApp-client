import { Component, OnInit } from '@angular/core';
import {RestService} from '../../services/rest.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-load',
  templateUrl: './teacher-load.component.html',
  styleUrls: ['./teacher-load.component.scss']
})
export class TeacherLoadComponent implements OnInit {

  constructor(public rest: RestService, private auth: AuthenticationService, private router: Router) { }

  teacherloads = [];
  fields = ['Profesor', 'Área', 'Potencial', 'H. a cubir', 'Otras docencias', 'Horas sin cubrir'];
  title = 'Carga docente';
  filterTeacher: any;

  ngOnInit() {
    this.rest.getTeacherLoads()
      .subscribe(
      data => {
        this.teacherloads = data;
      },
      err => {
        if (err.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
