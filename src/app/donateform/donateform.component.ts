import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donateform',
  templateUrl: './donateform.component.html',
  styleUrls: ['./donateform.component.scss']
})
export class DonateformComponent implements OnInit {
  names:string;
  phone:string;
  email:string;
  amount:number;
  constructor() { }

  ngOnInit(): void {
  }

}
