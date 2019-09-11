import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {first, map} from 'rxjs/operators';

declare const $: any;

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './user-tutorial.component.html',
  styleUrls: ['./user-tutorial.component.scss']
})
export class UserTutorialComponent implements OnInit {
  title = 'Mis tutorias';
  user: any;
  fieldDay = ['Días', 'Horas'];
  hoursOption = ['-', '08:30 - 10:30', '10:30 - 12:30', '12:30 - 14:30'];

  private selected: any;

  constructor(private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadData();
  }

  showTutorialModal() { $('#tutorialModal').modal('show'); }

  loadData() {
    this.rest.getTutorial(this.user.teacher_dni).subscribe(rest => { this.selected = rest; console.log(rest); });
  }

}
