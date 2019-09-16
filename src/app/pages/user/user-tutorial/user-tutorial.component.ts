import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';

declare const $: any;

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './user-tutorial.component.html',
  styleUrls: ['./user-tutorial.component.scss']
})
export class UserTutorialComponent implements OnInit {

  title = 'Mis tutorias';
  user: any;

  tutorialDay = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  private hoursSelected = 0;

  private firstSemester: any;
  private secondSemester: any;

  constructor(private rest: RestService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadData();
  }

  showTutorialModal() { $('#tutorialModal').modal('show'); }

  loadData() {
    this.rest.getTutorial(this.user.teacher_dni)
      .subscribe(rest => {
        console.log(rest);
        this.firstSemester = rest.first_semester;
        this.secondSemester = rest.second_semester;
        this.hoursSelected = rest.hours;
      });
  }
}
