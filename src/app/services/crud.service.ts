import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
user = new Subject()
  constructor( private http:HttpClient) { }
  creatuser(model:any){
   return this.http.post('http://localhost:3000/students', model)
  }
  getusers(type: any){

    return this.http.get(`http://localhost:3000/${type}`)
  }
  login(model:any){
    return this.http.put("http://localhost:3000/login/1" , model)

  }
  getrole(){
    return this.http.get("http://localhost:3000/login/1")
  }
  getlangauges(){
    return this.http.get("http://localhost:3000/subjects")
  }
}
