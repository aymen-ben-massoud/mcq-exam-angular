import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  userForm!:FormGroup
   students: any[] = []
   type:string ='students'
  constructor(private fb:FormBuilder,private crud: CrudService,  private route:Router , private toaster: ToastrService){  }
  ngOnInit(): void {
    this.creatform()
    this.getstudent()
  }

  creatform(){

    this.userForm = this.fb.group({
  username: ["", [Validators.required]],
  email: [''  , [Validators.required , Validators.email]],
  
  password: [''  , [Validators.required]],
  confirmpassword: [''  , [Validators.required]],
  
  
    })
   
  }
  getstudent(){
    this.crud.getusers(this.type).subscribe((res : any)=>{
this.students = res


    })
  }
  submit(){
  
  const model = {
   username: this.userForm.value.username,
   email: this.userForm.value.email,
   password: this.userForm.value.password,
   confirmpassword: this.userForm.value.confirmpassword
  }
let index = this.students.findIndex(item => item.email == this.userForm.value.email)

if(index !== -1){
this.toaster.error("this email exist")
}
else{
  this.crud.creatuser(model).subscribe((res:any)=> {
    this.route.navigate(['/login'])
    })
} }

}
