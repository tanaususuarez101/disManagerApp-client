import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../../services/rest.service';
import {TeacherDemandComponent} from '../teacher-demand/teacher-demand.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-teacher-load-details',
  templateUrl: './teacher-load-details.component.html',
  styleUrls: ['./teacher-load-details.component.scss']
})
export class TeacherLoadDetailsComponent implements OnInit {

  fields = ['Titulación', 'Asignatura', 'Áreas de conocimietnos', 'Curso', 'Tipo', 'Semestre', 'Tipo de grupo', 'Nº Grupo', 'Horas en solicitud'];
  teacher = {teacher_name: '', teacher_surnames: ''};
  groups = [];

  constructor(private route: ActivatedRoute, public rest: RestService) { }

  ngOnInit() {
    this.teacherLoad();
  }

  private teacherLoad() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rest.getTeacherLoad(id)
      .subscribe(data => {
        this.teacher.teacher_name = data.teacher_name;
        this.teacher.teacher_surnames = data.teacher_surnames;
        this.groups = data.groups.map(group => {
          group.area_acronym = TeacherDemandComponent.typeOfArea(group.area_cod);
          return group;
        });
      });
  }
}
