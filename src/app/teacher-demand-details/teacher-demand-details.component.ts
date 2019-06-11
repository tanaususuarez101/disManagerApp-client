import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-demand-details',
  templateUrl: './teacher-demand-details.component.html',
  styleUrls: ['./teacher-demand-details.component.scss']
})
export class TeacherDemandDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTeacherDemant();
  }

  private getTeacherDemant() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Demanda docente: ', id);
  }
}
