import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {AuthenticationService} from '../../../services/authentication.service';

declare const $: any;

@Component({
  selector: 'app-update-tutorial',
  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.scss']
})
export class UpdateTutorialComponent implements OnInit {

  user: any;
  @Output() request = new EventEmitter();
  hoursOption = ['-', '08:30 - 10:30', '10:30 - 12:30', '12:30 - 14:30'];

  private formTutorial = {
    first_semester : { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [] },
    second_semester : { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [] },
    hours: 0
  };

  constructor(private rest: RestService, private  auth: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.loadTutorial();
  }

  sendTutorialDay() {

    this.rest.createTutorial(this.formTutorial, this.user.teacher_dni)
      .subscribe(
      data => {
          $('#tutorialModal').modal('hide');
          this.request.emit(true);
        },
      err => alert('Error: ' + err.message) );

  }

  private incrementHours() {
    let hoursSelected = 0;
    for (const semester in this.formTutorial) {
      if (typeof this.formTutorial[semester] === 'object') {
        for (const day in this.formTutorial[semester]) { hoursSelected += this.formTutorial[semester][day].length * 2; }
      }
    }
    this.formTutorial.hours = hoursSelected;
  }

  onChange(deviceValue, day, semester) {
    if (deviceValue === '-') {
      return;
    }
    if (semester === 'first') {
      switch (day) {
        case 'monday': {
          if (!this.formTutorial.first_semester.monday.includes(deviceValue)) {
            this.formTutorial.first_semester.monday.push(deviceValue);
          }
          break;
        }
        case 'tuesday': {
          if (!this.formTutorial.first_semester.tuesday.includes(deviceValue)) {
            this.formTutorial.first_semester.tuesday.push(deviceValue);
          }
          break;
        }
        case 'wednesday': {
          if (!this.formTutorial.first_semester.wednesday.includes(deviceValue)) {
            this.formTutorial.first_semester.wednesday.push(deviceValue);
          }
          break;
        }
        case 'thursday': {
          if (!this.formTutorial.first_semester.thursday.includes(deviceValue)) {
            this.formTutorial.first_semester.thursday.push(deviceValue);
          }
          break;
        }
        case 'friday': {
          if (!this.formTutorial.first_semester.friday.includes(deviceValue)) {
            this.formTutorial.first_semester.friday.push(deviceValue);
          }
          break;
        }
      }
    } else {
      switch (day) {
        case 'monday': {
          if (!this.formTutorial.second_semester.monday.includes(deviceValue)) {
            this.formTutorial.second_semester.monday.push(deviceValue);
          }
          break;
        }
        case 'tuesday': {
          if (!this.formTutorial.second_semester.tuesday.includes(deviceValue)) {
            this.formTutorial.second_semester.tuesday.push(deviceValue);
          }
          break;
        }
        case 'wednesday': {
          if (!this.formTutorial.second_semester.wednesday.includes(deviceValue)) {
            this.formTutorial.second_semester.wednesday.push(deviceValue);
          }
          break;
        }
        case 'thursday': {
          if (!this.formTutorial.second_semester.thursday.includes(deviceValue)) {
            this.formTutorial.second_semester.thursday.push(deviceValue);
          }
          break;
        }
        case 'friday': {
          if (!this.formTutorial.second_semester.friday.includes(deviceValue)) {
            this.formTutorial.second_semester.friday.push(deviceValue);
          }
          break;
        }
      }
    }
    this.incrementHours();
  }

  onChangeDelete(deviceValue, day, semester) {

    if (semester === 'first') {
      switch (day) {
        case 'monday': {
          this.formTutorial.first_semester.monday = this.formTutorial.first_semester.monday.filter(value => value !== deviceValue);
          break;
        }
        case 'tuesday': {
          this.formTutorial.first_semester.tuesday = this.formTutorial.first_semester.tuesday.filter(value => value !== deviceValue);
          break;
        }
        case 'wednesday': {
          this.formTutorial.first_semester.wednesday = this.formTutorial.first_semester.wednesday.filter(value => value !== deviceValue);
          break;
        }
        case 'thursday': {
          this.formTutorial.first_semester.thursday = this.formTutorial.first_semester.thursday.filter(value => value !== deviceValue);
          break;
        }
        case 'friday': {
          this.formTutorial.first_semester.friday = this.formTutorial.first_semester.friday.filter(value => value !== deviceValue);
          break;
        }
      }
    } else {
      switch (day) {
        case 'monday': {
          this.formTutorial.second_semester.monday = this.formTutorial.second_semester.monday.filter(value => value !== deviceValue);
          break;
        }
        case 'tuesday': {
          this.formTutorial.second_semester.tuesday = this.formTutorial.second_semester.tuesday.filter(value => value !== deviceValue);
          break;
        }
        case 'wednesday': {
          this.formTutorial.second_semester.wednesday = this.formTutorial.second_semester.wednesday.filter(value => value !== deviceValue);
          break;
        }
        case 'thursday': {
          this.formTutorial.second_semester.thursday = this.formTutorial.second_semester.thursday.filter(value => value !== deviceValue);
          break;
        }
        case 'friday': {
          this.formTutorial.second_semester.friday = this.formTutorial.second_semester.friday.filter(value => value !== deviceValue);
          break;
        }
      }
    }
    this.incrementHours();
  }

  private loadTutorial() {
    this.rest.getTutorial(this.auth.getUser().teacher_dni).subscribe(data => this.formTutorial = data );
  }
}
