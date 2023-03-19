import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly baseUrl: string = "https://3z4kluwtp5.execute-api.us-east-1.amazonaws.com/real/login";

  constructor(private http: HttpClient) { }

  onSubmit(loginForm: NgForm) {
    // console.log(loginForm.value);
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);

    this.http.post(this.baseUrl, null, { "headers": { "username": loginForm.value.username, "password": loginForm.value.password } })
      .subscribe((result) => {
        console.warn(result);
        if (result.loginResult==true) {
          // TODO login user and store something in session storage to keep them logged in
        }
      })

  }


}

