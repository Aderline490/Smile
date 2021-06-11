import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kid } from '../models/Kids';
import { KidsService } from '../services/kids.service';
@Component({
  selector: 'app-register-kid',
  templateUrl: './register-kid.component.html',
  styleUrls: ['./register-kid.component.scss']
})
export class RegisterKidComponent implements OnInit {
  // _id?:string;
  // // name:string;
  // // gender:string;
  // // country:string;
  // // desc:string;
  // // dob:Date;
  // // phone:string;
  // // email:string;
  // // amount:number;
  public kid:Kid;
  constructor(private kidService:KidsService, private router:Router) { }
  
  ngOnInit(): void {
    this.kid = this.kidService.getter();
    console.log(this.kid);
  }
  registerOrUpdate(){
    if(this.kid._id == undefined){
      this.kidService.registerKid(this.kid)
      .subscribe(
        data=>{
        console.log(data);
        this.router.navigate(['/kids']);
      },
      error=>{
        console.log(error);
      })
    }else{
      this.kidService.updateKid(this.kid)
      .subscribe(
        data=>{
        console.log(data);
        this.router.navigate(['/kids']);
      },
      error=>{
        console.log(error);
      })
    }
  }

}
