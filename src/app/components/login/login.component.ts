import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
  users: any[] = []
  type:string ='students'
  constructor(private fb:FormBuilder,private crud: CrudService,  private route:Router, private toaster: ToastrService){  }

  ngOnInit(): void {
    this.creatform()
    this.getstudent()
  }
  creatform(){
this.loginForm =  this.fb.group({
  type: [this.type , [Validators.required]],
  email :['', [Validators.required, Validators.email]],
  password : ['', [Validators.required]]

})

  }
  getstudent(){
    this.crud.getusers(this.type).subscribe((res : any)=>{
this.users = res


    })
  }
  submit
  (){

let index = this.users.findIndex(item => item.email == this.loginForm.value.email &&   item.password   == this.loginForm.value.password )

if(index == -1){
 this.toaster.error("email or password not correct")
 this.route.navigate(['/login'])
}
else{
    
  const model = {
    username: this.users[index].username,
   role: this.type   
      }
  this.crud.login(model).subscribe((res:any)=> {
 this.crud.user.next(res)
 this.toaster.success("welcome")
    this.route.navigate(['/home'])
    })
} }


role(event:any){
this.type =event.value 
}

}
