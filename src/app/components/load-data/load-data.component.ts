import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {
  title = 'Importar excel';
  order = 'scheme';
  ordenSelected = [
    {name: 'Importar esquema de base de datos', id: 'scheme'},
    {name: 'Importar PDA', id: 'pda'},
    {name: 'Importar Profesores', id: 'teacher'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
