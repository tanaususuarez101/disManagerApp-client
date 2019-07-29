import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent implements OnInit {

  user = this.auth.getUser();

  PDOlink = [
    {name: 'Demanda docente', path: '/dashboard/teacher-demand'},
    {name: 'Carga docente', path: '/dashboard/teacher-load'},
    {name: 'Tutorías', path: '/dashboard/tutorial'},
    {name: 'Coordinador de Asignatura', path: '/dashboard/subject-coordinator'},
    {name: 'Proyecto docente', path: '/dashboard/teacher-PDA'},
  ];
  userlink = [
    {name: 'Mi Tutoría', path: '/dashboard/user-tutorial'},
    {name: 'Mi Solicitud', path: '/dashboard/user-request'},
    {name: 'Mi Coordinación', path: '/dashboard/user-coordinator'},
    {name: 'Mi Carga docente', path: '/dashboard/user-subject'}
  ];
  adminlink = [
    {name: 'Cargar esquema', path: '/dashboard/load-scheme'},
    {name: 'Añadir usuario', path: '/dashboard/user-signup'}
  ];

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {}

  acceptModal() {
    $('#session-confirm').modal('hide');
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}