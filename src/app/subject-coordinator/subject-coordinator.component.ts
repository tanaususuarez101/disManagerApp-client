import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-subject-coordinator',
  templateUrl: './subject-coordinator.component.html',
  styleUrls: ['./subject-coordinator.component.scss']
})
export class SubjectCoordinatorComponent implements OnInit {

  fields = ['Titulación', 'Asignatura', 'Área de conocimiento', 'Tipo', 'Semestre', 'Coordinador'];
  coordinator = [];


  constructor(public rest: RestService) { }

  ngOnInit() {
    this.rest.getCoordinator().subscribe(
      data => this.coordinator = data
    );
  }

}
