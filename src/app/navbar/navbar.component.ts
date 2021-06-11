import { Component, OnInit } from '@angular/core';
import { KidsService} from '../services/kids.service';
import { Router } from '@angular/router';
import { Kid } from '../models/Kids';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private kidsService:KidsService, private router:Router) { }

  ngOnInit(): void {
  }
  list(event:any){
    event.preventDefault();
    this.router.navigate(['/kids']);
  }
  newKid(event:any){
    event.preventDefault();
    //initialzing it to null
    this.kidsService.setter(new Kid());
    this.router.navigate(['/registerKid']);
  }
}
