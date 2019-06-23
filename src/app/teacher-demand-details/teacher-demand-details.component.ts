import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-teacher-demand-details',
  templateUrl: './teacher-demand-details.component.html',
  styleUrls: ['./teacher-demand-details.component.scss']
})
export class TeacherDemandDetailsComponent implements OnInit {

  groupDetails = {};

  constructor(private route: ActivatedRoute,
              public rest: RestService
  ) { }

  ngOnInit() {
    this.getTeacherDemant();
  }

  private getTeacherDemant() {
    const areaCod = +this.route.snapshot.paramMap.get('area_cod');
    const groupCod = +this.route.snapshot.paramMap.get('group_cod');
    const subjectCod = +this.route.snapshot.paramMap.get('subject_cod');
    if (areaCod != null && groupCod != null && subjectCod != null) {
      this.rest.getGroup(groupCod, subjectCod, areaCod).subscribe(
        group => {
          this.groupDetails = group;
          console.log(this.groupDetails);
        }
      );
    }
    /*
    this.groupDetails = {
      university_degree_name: 'Grad. Ingeniería informatica',
      knowledge_area_name: 'Informática y sistema',
      subject_name: 'Álgebra',
      group_cod: 1,
      group_type: 'práctica de aula',
      group_hours: 60,
      teacher: [
        {teacher_name: 'nombre del profesor 1', assigned_hours: 7.5},
        {teacher_name: 'nombre del profesor 2', assigned_hours: 22},
      ]
    };*/

    console.log('Demanda docente: ', groupCod, subjectCod, areaCod);
  }
}
