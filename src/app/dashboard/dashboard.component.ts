import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  hideMenuOptions: boolean = true;
  hideListOptions: boolean = true;
  showNotifications: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleOrphNameClick() {
    // this.hideMenuOptions = !this.hideMenuOptions;
    if (this.hideMenuOptions) {
      return this.hideMenuOptions = false
    }else {
      return this.hideMenuOptions = true
    }
  }
  handleShowNotification() {
    this.showNotifications = !this.showNotifications;
  }
  handleShowListOptions(div: any) {
    div.hidden = !div.hidden;
  }


}
