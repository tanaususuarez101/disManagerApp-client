import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-data',
  templateUrl: './load-data.component.html',
  styleUrls: ['./load-data.component.scss']
})
export class LoadDataComponent implements OnInit {
  title = 'Panel de base de datos';
  order = 'scheme';
  ordenSelected = [
    {name: 'Importar esquema de base de datos', id: 'scheme'},
    {name: 'Importar PDA', id: 'pda'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
