import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-teacher-history-details',
  templateUrl: './teacher-history-details.component.html',
  styleUrls: ['./teacher-history-details.component.scss']
})
export class TeacherHistoryDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTeacherHistory();
  }

  private getTeacherHistory() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Historial docente: ', id);
  }
}
