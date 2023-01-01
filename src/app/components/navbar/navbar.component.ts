import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user:any = null
constructor(private crud: CrudService , private route: Router){}
ngOnInit(): void {

this.crud.user.subscribe((res:any) =>{
  if(res.role){
    this.user =res 
  }

   console.log(this.user)
})

}
logout(){
  let model = {}
  this.crud.login(model).subscribe((res:any)=>{
    this.user = null
    this.crud.user.next(res)
    this.route.navigate(['/login'])


  })

  
}

}
