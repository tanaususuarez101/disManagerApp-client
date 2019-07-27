import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestService} from '../../services/rest.service';

declare var $: any;

@Component({
  selector: 'app-teacher-demand-details',
  templateUrl: './teacher-demand-details.component.html',
  styleUrls: ['./teacher-demand-details.component.scss']
})
export class TeacherDemandDetailsComponent implements OnInit {

  groupDetails: any;


  constructor(private route: ActivatedRoute,
              public rest: RestService) { }

  ngOnInit() {
    this.getTeacherDemant();
  }

  private getTeacherDemant() {
    const areaCod = +this.route.snapshot.paramMap.get('area_cod');
    const groupCod = +this.route.snapshot.paramMap.get('group_cod');
    const subjectCod = +this.route.snapshot.paramMap.get('subject_cod');
    if (areaCod != null && groupCod != null && subjectCod != null) {
      this.rest.getGroup(groupCod, subjectCod, areaCod)
        .subscribe(
        group => {
          this.groupDetails = group;
          console.log(group);
        }
      );
    }
  }

  showRequest(event): void {
    if (event) {
      $('#alert-success').addClass('show');
      this.getTeacherDemant();
    } else {
      $('#alert-danger').addClass('show');
    }
  }
}
