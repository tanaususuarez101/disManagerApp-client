import { Component, OnInit } from '@angular/core';
import {RestService} from '../../../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  title = 'Tutorías';
  fields = ['Profesor', 'Área de conocimiento', 'Horas totales', 'Horas cubiertas', 'Horas sin cubrir'];
  teachertutorial = [];

  filterTeacher: any;

  orderArea = [
    {id: 'radioArea1', name: 'Arq. y tec. de Computadores', value: 'ATC', checked: false },
    {id: 'radioArea2', name: 'Ciencia de la Comp. e Intel. Artificial', value: 'CCIA', checked: false },
    {id: 'radioArea3', name: 'Len. y sis. Informáticos', value: 'LSI', checked: false },
  ];

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
