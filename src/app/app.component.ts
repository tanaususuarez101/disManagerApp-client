import {Component, OnChanges, OnInit} from '@angular/core';
import {StorageService} from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit {

  title = 'disManagerApp-client';
  isLoggedIn: any;

  constructor(public storage: StorageService) {}

  ngOnInit() {
    this.isLoggedIn = this.storage.isAuthenticated();
  }

  ngOnChanges() {
    this.isLoggedIn = this.storage.isAuthenticated();
  }

  request($event) {
    this.isLoggedIn = $event;
  }

}

