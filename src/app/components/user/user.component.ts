import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  isLoggedIn: boolean;
  uName: string;
  email: string;
  joinDate: string;

  readonly baseUrl: string = "https://3z4kluwtp5.execute-api.us-east-1.amazonaws.com/real/details?username=";


  // TODO create change user icon modal

  // TODO create change password function


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn")!);

    // redirect to homepage if not logged in
    if (!this.isLoggedIn) {
      this.router.navigate(["/"]);
    } else {
      this.uName = sessionStorage.getItem("username")!;
      this.getUserStats();
    }

  }

  getUserStats() {
    this.http.get<userDetails>((this.baseUrl + this.uName)).subscribe ((result) => {
      this.email = result.email;
      this.joinDate = result.memberSince;
    })
  }


}


export interface userDetails {
  email: string;
  memberSince: string;
}
