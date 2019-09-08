import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  removeSideBar() {
    $('#dashboard-sidebar').removeClass('active');
    $('#overlay').removeClass('active');
  }
}
