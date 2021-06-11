import { Component, OnInit } from '@angular/core';
import { KidsService } from '../services/kids.service';
import { Kid } from '../models/Kids';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {
  public kids:Kid[];
  number:number=10;
  numbers:number=82;
  // dob:Date = kid.dob
  // age:number;
  constructor(private kidsService:KidsService, private router:Router) { }

  ngOnInit(): void {
    this.getKids();
  }
  
  getKids(){
    this.kidsService.getKids()
    .subscribe(
      data=>{
      console.log(data);
      this.kids = data['msg'];
    },
      err=>{
      console.log(err);
    })
  }
  

  // if () {
  //   //convert date again to type Date
  //   const bdate = new Date(this.dob);
  //   const timeDiff = Math.abs(Date.now() - bdate.getTime() );
  //   this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  // }
  updateKid(kid){
    this.kidsService.setter(kid);
    this.router.navigate(['/registerKid']);
  }
  deleteKid(kid){
    this.kidsService.deleteKid(kid._id)
    .subscribe(
      data=>{
      this.kids.splice(this.kids.indexOf(kid),1)
    },
    error=>{
      console.log(error.message);
    })
  }
}
