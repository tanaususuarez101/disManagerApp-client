import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  links = [
    {name: 'Demanda docente', path: '/teacher-demand'},
    {name: 'Carga docente', path: '/teacher-load'},
    {name: 'Tutorías', path: '/tutorial'},
    {name: 'Coordinador de Asignatura', path: '/subject-coordinator'},
    {name: 'Historial docente', path: '/teacher-history'},
    {name: 'Proyecto docente', path: '/teacher-PDA'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
