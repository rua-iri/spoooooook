import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  // TODO run query to database from here and use list of 
  // films to populate this array

  filmList: object[] = [
    {"title": "Some Film"},
    {"title": "Another One"},
    {"title": "Yet Another Film"},
    {"title": "And another one"},
  ]

}
