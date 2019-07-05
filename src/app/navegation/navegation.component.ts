import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  @Output() request = new EventEmitter();

  linkPDO = [
    {name: 'Demanda docente', path: '/teacher-demand'},
    {name: 'Carga docente', path: '/teacher-load'},
    {name: 'Tutorías', path: '/tutorial'},
    {name: 'Coordinador de Asignatura', path: '/subject-coordinator'},
    {name: 'Historial docente', path: '/teacher-history'},
    {name: 'Proyecto docente', path: '/teacher-PDA'},
  ];
  linkUser = [
    {name: 'Perfil', path: ''},
    {name: 'Mis Asignaturas', path: ''},
    {name: 'Mis Solicitudes', path: ''}
  ];
  constructor(public storage: StorageService) { }

  ngOnInit() {}

  logout() {
    this.request.emit(false);
    this.storage.removeCurrentUser();
  }

}
