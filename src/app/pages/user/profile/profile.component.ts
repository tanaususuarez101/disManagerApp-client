import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {FormBuilder, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: any;
  private title = 'Perfil';


  constructor(private auth: AuthenticationService) { }

  ngOnInit() { this.user = this.auth.getUser(); }


  changePassword() {
    $('#changerPasswordModal').modal('show');
  }
}
