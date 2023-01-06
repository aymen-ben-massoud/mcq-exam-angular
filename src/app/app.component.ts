import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'students';

  constructor(private crud:CrudService){}
  ngOnInit(): void {

this.getuserdata()
}



getuserdata(){
  this.crud.getrole().subscribe((res:any)=>{
    this.crud.user.next(res)
    
    
       })

}
}