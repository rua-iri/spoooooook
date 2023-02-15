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
    {"title": "Last Film"}
  ]

  translateX: number = 0;

  // TODO if the list is at the beginning/end then
  // it should automatically jump to the opposite side

  // functions to alter the x position of the list
  cycleNext() {
    this.translateX -= 20;
  }

  cyclePrev() {
    this.translateX += 20;
  }

}
