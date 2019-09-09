import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-load',
  templateUrl: './teacher-load.component.html',
  styleUrls: ['./teacher-load.component.scss']
})
export class TeacherLoadComponent implements OnInit {

  constructor(public rest: RestService, private auth: AuthenticationService, private router: Router) { }

  title = 'Carga docente';
  fields = ['Profesor', 'Área', 'Potencial', 'H. a cubir', 'Otras docencias', 'Horas sin cubrir'];
  teacherloads = [];
  filterTeacher: any;

  orderArea = [
    {id: 'radioArea1', name: 'Arq. y tec. de Computadores', value: 'ATC', checked: false },
    {id: 'radioArea2', name: 'Ciencia de la Comp. e Intel. Artificial', value: 'CCIA', checked: false },
    {id: 'radioArea3', name: 'Len. y sis. Informáticos', value: 'LSI', checked: false },
  ];

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
