import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  // Vary the navbar depending on whether the user is logged in
  isLoggedIn: boolean;
  uName: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params)
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn")!);

    if (this.isLoggedIn == null) {
      sessionStorage.setItem("loggedIn", "false");
      this.isLoggedIn = false;
      this.uName = "";

    } else if (this.isLoggedIn) {
      this.uName = sessionStorage.getItem("username")!;
    }

  }

  // function to log user out
  logout() {
    sessionStorage.removeItem("username");
    sessionStorage.setItem("loggedIn", "false");
    this.isLoggedIn = false;
    this.uName = "";
    this.router.navigate(["/"]);
  }


}


