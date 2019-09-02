import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-scheme',
  templateUrl: './details-scheme.component.html',
  styleUrls: ['./details-scheme.component.scss']
})
export class DetailsSchemeComponent implements OnInit, OnChanges {

  @Input() public message: string;
  fields = ['Cód. Titulación', 'Cód. Asignatura', 'Cód. Área', 'Cód. Grupo', 'Horas'];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.message) { console.log(this.message); }
  }
}
