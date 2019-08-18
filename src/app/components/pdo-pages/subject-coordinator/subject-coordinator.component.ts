import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subject-coordinator',
  templateUrl: './subject-coordinator.component.html',
  styleUrls: ['./subject-coordinator.component.scss']
})
export class SubjectCoordinatorComponent implements OnInit {

  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Tipo', 'Semestre', 'Coordinador'];
  coordinator = [];
  responsible = [];
  title = 'Coordinadores';


  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.getSubjectCoordinator().subscribe(
      data => {
        console.log(data);
        this.coordinator = data;
      },
      err => {
        if (err.status === '401') {
          this.router.navigate(['/login']);
        }
      }
    );
    this.rest.getSubjectResponsible().subscribe(
      data => {
        this.responsible = data;
      },
      err => {
        if (err.status === '401') {
          this.router.navigate(['/login']);
        }
      }
    );
  }

}
