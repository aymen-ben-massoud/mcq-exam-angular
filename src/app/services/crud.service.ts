import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http:HttpClient) { }
  creatuser(model:any){
   return this.http.post('http://localhost:3000/students', model)
  }
}
