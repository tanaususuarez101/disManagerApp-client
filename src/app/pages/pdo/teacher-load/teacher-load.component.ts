import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {TeacherDemandComponent} from '../teacher-demand/teacher-demand.component';

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

  orderArea: any;

  ngOnInit() {
    this.orderArea = TeacherDemandComponent.orderMyArea(this.auth.getUser().area_cod);
    this.rest.getTeacherLoads()
      .pipe(map(data => {
        for ( const subject of data) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
        console.log(data);
        return data;
      }))
      .subscribe(
      data =>  this.teacherloads = data,
      err => { if (err.status == 401) { this.router.navigate(['/login']); }
      }
    );
  }

}
