import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  teachertutorial = [];
  fields = ['Profesor', 'Área de conocimiento', 'Horas totales', 'Horas cubiertas', 'Horas sin cubrir'];
  title = 'Tutorías';

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
    this.rest.getListTutorial().subscribe(
      data => this.teachertutorial = data,
      err => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        }
      }
    );

  }


}
