import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-teacher-load-details',
  templateUrl: './teacher-load-details.component.html',
  styleUrls: ['./teacher-load-details.component.scss']
})
export class TeacherLoadDetailsComponent implements OnInit {

  teacherLoads = [];
  fields = ['Titulación', 'Asignatura', 'Curso', 'Tipo', 'Semestre', 'Tipo de grupo', 'Nº Grupo', 'Horas en solicitud'];

  constructor(private route: ActivatedRoute, public rest: RestService) { }

  ngOnInit() {
    this.teacherLoad();
  }

  private teacherLoad() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rest.getTeacherLoad(id).subscribe(
      data => {
        this.teacherLoads = data;
        console.log(data);
      }
    );
  }
}
