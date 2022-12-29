import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email])
  password= new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email && this.password.hasError('required')) {
      return 'You must enter a value';
    }
   
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
