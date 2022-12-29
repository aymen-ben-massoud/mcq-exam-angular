import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  userForm!:FormGroup
  constructor(private fb:FormBuilder,private crud: CrudService,  private route:Router){  }
  ngOnInit(): void {
    this.creatform()
  }

  creatform(){

    this.userForm = this.fb.group({
  username: [''  , [Validators.required]],
  email: [''  , [Validators.required , Validators.email]],
  
  password: [''  , [Validators.required]],
  confirmpassword: [''  , [Validators.required]],
  
  
    })
   
  }
  submit
  (){
  
  const model = {
   username: this.userForm.value.username,
   email: this.userForm.value.email,
   password: this.userForm.value.password,
   confirmpassword: this.userForm.value.confirmpassword
  }
  this.crud.creatuser(model).subscribe((res:any)=> {
  this.route.navigate(['/home'])
  })
  
  }

}
