import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {TeacherDemandComponent} from '../teacher-demand/teacher-demand.component';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-teacher-tutorial',
  templateUrl: './teacher-tutorial.component.html',
  styleUrls: ['./teacher-tutorial.component.scss']
})
export class TeacherTutorialComponent implements OnInit {

  title = 'Tutorías';
  fields = ['Profesor', 'Área de conocimiento', 'Horas totales', 'Horas cubiertas', 'Horas sin cubrir'];
  teachertutorial = [];

  filterTeacher: any;

  orderArea = [
    {id: 'radioArea1', name: 'Arq. y tec. de Computadores', value: 'ATC', checked: false },
    {id: 'radioArea2', name: 'Ciencia de la Comp. e Intel. Artificial', value: 'CCIA', checked: false },
    {id: 'radioArea3', name: 'Len. y sis. Informáticos', value: 'LSI', checked: false },
  ];

  constructor(public rest: RestService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.orderArea = TeacherDemandComponent.orderMyArea(this.auth.getUser().area_cod);
    this.rest.getListTutorial()
      .pipe(map(data => {
        for ( const subject of data) { subject.area_acronym = TeacherDemandComponent.typeOfArea(subject.area_cod); }
        return data;
      }))
      .subscribe(
      data => this.teachertutorial = data,
      err => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

  }


}
