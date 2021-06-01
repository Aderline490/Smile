import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showMenuOptions: boolean = false;
  showListOptions: boolean = false;
  showNotifications: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleOrphNameClick() {
    this.showMenuOptions = !this.showMenuOptions;
  }
  handleShowNotification() {
    this.showNotifications = !this.showNotifications;
  }

}
