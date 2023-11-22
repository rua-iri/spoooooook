import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isLoggedIn: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn")!);

    // redirect to registration page if not logged in
    // if (!this.isLoggedIn) {
    //   this.router.navigate(["register"]);
    // }
  }

}
