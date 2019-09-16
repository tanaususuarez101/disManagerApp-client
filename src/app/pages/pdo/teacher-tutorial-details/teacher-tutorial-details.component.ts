import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-tutorial-details',
  templateUrl: './teacher-tutorial-details.component.html',
  styleUrls: ['./teacher-tutorial-details.component.scss']
})
export class TeacherTutorialDetailsComponent implements OnInit {

  private title: any;
  private tutorialDay = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  private firstSemester: { tuesday: any[]; wednesday: any[]; thursday: any[]; friday: any[]; monday: any[] };
  private hoursSelected: number | number | any;
  private secondSemester: { tuesday: any[]; wednesday: any[]; thursday: any[]; friday: any[]; monday: any[] };

  constructor(private rest: RestService, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.rest.getTeacher(id).subscribe(te => this.title = 'Tutorias de ' + te['teacher_name']);
    this.loadData(id);
  }

  loadData(dni) {
    this.rest.getTutorial(dni)
      .subscribe(rest => {
        this.firstSemester = rest.first_semester;
        this.secondSemester = rest.second_semester;
        this.hoursSelected = rest.hours;
      });
  }
}
