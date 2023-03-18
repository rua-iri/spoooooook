import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    // TODO submit form to backend to check if user exists and details are correct

  }


}
