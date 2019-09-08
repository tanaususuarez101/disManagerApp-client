import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: any;

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
    {name: 'Base de Datos', path: '/dashboard/database-manager'},
    {name: 'Usuario', path: '/dashboard/user-manager'},
    {name: 'Solicitudes', path: '/dashboard/request-manager'},
  ];

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

  logout() {
    $('#session-logout').modal('show');
  }

  closeSidebar() {
    $('#dashboard-sidebar').removeClass('active');
    // hide overlay
    $('#overlay').removeClass('active');
  }
}
