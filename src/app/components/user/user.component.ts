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
  iconPath: string;
  iconAra: Array<string> = [];
  modalDisplay: string = "none";

  readonly baseUrl: string = "https://3z4kluwtp5.execute-api.us-east-1.amazonaws.com/real/details?username=";


  // TODO create change user icon modal

  // TODO create change password function


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn")!);
    this.iconPath = "assets/images/user_icons/1.png"

    // redirect to homepage if not logged in
    if (!this.isLoggedIn) {
      this.router.navigate(["/"]);
    } else {
      this.uName = sessionStorage.getItem("username")!;
      this.getUserStats();
    }

    // generate array of all existing icons
    for (let i = 1; i < 9; i++) {
      this.iconAra.push("assets/images/user_icons/" + i + ".png");
    }

  }

  getUserStats() {
    this.http.get<userDetails>((this.baseUrl + this.uName)).subscribe((result) => {
      this.email = result.email;
      this.joinDate = result.memberSince;
    })
  }

  selectIcon(src: string) {
    console.log(src);

    // TODO use api to store user icon preference

  }

  openModal() {
    this.modalDisplay = "block";
  }

  closeModal() {
    this.modalDisplay = "none";
  }


}


export interface userDetails {
  email: string;
  memberSince: string;
}
