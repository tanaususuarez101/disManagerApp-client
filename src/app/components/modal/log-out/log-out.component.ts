import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {

  }

  acceptModal() {
    $('#session-logout').modal('hide');
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
