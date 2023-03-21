import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly baseUrl: string = "https://3z4kluwtp5.execute-api.us-east-1.amazonaws.com/real/login";
  paramString: string;
  errorMessage: string = "";


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("loggedIn") == "true") {
      this.router.navigate(["/"]);
    }
  }

  onSubmit(loginForm: NgForm) {

    this.paramString = `?username=${loginForm.value.username}&password=${loginForm.value.password}`;

    this.http.post<loginResponse>((this.baseUrl + this.paramString), null)
      .subscribe((result) => {
        if (result.loginResult == true) {
          sessionStorage.setItem("loggedIn", "true");
          sessionStorage.setItem("username", loginForm.value.username);
          this.router.navigate(["/"]);
        } else {
          this.errorMessage = "Error: Invalid Username or Password";
        }
      })

  }


}

export interface loginResponse {
  loginResult: boolean;
}
