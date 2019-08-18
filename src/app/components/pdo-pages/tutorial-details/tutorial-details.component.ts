import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {
  private title = 'Tutorias de ';
  private selected: any;
  private fieldDay = ['Días', 'Horas'];
  private teacher: any;

  constructor(private rest: RestService, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getServiceTutorial(id);
    this.rest.getTeacherLoad(id).subscribe(
      data => {
        this.title = this.title + data.teacher_name;
        console.log(data);
      }
    );
  }
  private getServiceTutorial(id) {

    this.rest.getTutorial(id).pipe(
      map(data => {
        return {
          first_semester: {
            monday: data.first_semester.monday,
            tuesday: data.first_semester.tuesday,
            wednesday: data.first_semester.wednesday,
            thursday: data.first_semester.thursday,
            friday: data.first_semester.friday,
          },
          second_semester: {
            monday: data.second_semester.monday,
            tuesday: data.second_semester.tuesday,
            wednesday: data.second_semester.wednesday,
            thursday: data.second_semester.thursday,
            friday: data.second_semester.friday,
          }
        };
      })
    ).subscribe(data => {
      this.selected = data;
    });
  }
}
