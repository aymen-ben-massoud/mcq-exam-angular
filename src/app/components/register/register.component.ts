import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userForm!:FormGroup
  constructor(private fb:FormBuilder, private auth:AuthService, private route:Router) { }

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
this.auth.creatuser(model).subscribe((res:any)=> {
this.route.navigate(['/home'])
})

}
  
}
