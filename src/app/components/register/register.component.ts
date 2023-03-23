import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  readonly baseUrl: string = "https://3z4kluwtp5.execute-api.us-east-1.amazonaws.com/real/register";
  paramString: string;
  errorMessage: string = "";


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("loggedIn") == "true") {
      this.router.navigate(["/"]);
    }
  }

  onSubmit(registerForm: NgForm) {


    // check that the form is completely filled
    for (const property in registerForm.value) {
      if (!registerForm.value[property]) {
        this.errorMessage = "Error: " + property + " is not completed";
        return null;
      }
    }

    // check that passwords match
    if (registerForm.value.password != registerForm.value.repassword) {
      this.errorMessage = "Error: Passwords Do Not Match";
      return null;
    }

    // TODO check that passwords are of a reasonable length

    // TODO check that email is valid??

    // TODO check that all fields do not contain forbidden characters e.g. inverted commas, spaces etc...

    this.paramString = `?username=${registerForm.value.username}&password=${registerForm.value.password}&email=${registerForm.value.email}`;

    this.http.post<registerResponse>((this.baseUrl + this.paramString), null)
      .subscribe((result) => {
        if (result.registerResult == true) {
          this.errorMessage = "";
          sessionStorage.setItem("loggedIn", "true");
          sessionStorage.setItem("username", registerForm.value.username);
          this.router.navigate(["/"]);
        } else {
          this.errorMessage = "Error: Invalid Username, Email or Password";
        }
      })

    return null;

  }


}


export interface registerResponse {
  registerResult: boolean;
}


