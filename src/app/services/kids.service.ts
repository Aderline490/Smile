import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { Kid } from '../models/Kids'; 
@Injectable({
  providedIn: 'root'
})   
export class KidsService {
  private kid:Kid;
  private baseUri:string= "http://localhost:4000";
  private headers = new HttpHeaders().set("Content-Type","application/json");
  constructor(private http:HttpClient) { }

  registerKid(kid:Kid){
    return this.http.post(this.baseUri+'/kids/registerKids',kid,{headers:this.headers});
  }
  getKids(){
    // console.log(this.http.get(this.baseUri+'/kids',{headers:this.headers});)
    return this.http.get(this.baseUri+"/kids",{headers:this.headers});
  }
  getKid(id:string){
    return this.http.get(this.baseUri+'/kids/'+id,{headers:this.headers});
  }
  updateKid(kid:Kid){
    return this.http.put(this.baseUri+'/registerKid',kid,{headers:this.headers});
  }
  deleteKid(id:string){
    return this.http.delete(this.baseUri+'/kids/'+id,{headers:this.headers})
  }
  setter(kid:Kid){
    this.kid = kid;
  }
  getter(){
    return this.kid;
  }
}
