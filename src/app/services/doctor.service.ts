import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

creatsubject(modle:any){
  return this.http.post("http://localhost:3000/subjects",modle)
}

}
