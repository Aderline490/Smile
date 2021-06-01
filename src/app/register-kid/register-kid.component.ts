import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-kid',
  templateUrl: './register-kid.component.html',
  styleUrls: ['./register-kid.component.scss']
})
export class RegisterKidComponent implements OnInit {
  names:string;
  gender:string;
  country:string;
  desc:string;
  dob:Date;
  phone:string;
  email:string;
  amount:number;
  constructor() { }

  ngOnInit(): void {
  }

}
