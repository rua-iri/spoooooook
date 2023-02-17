import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from 'src/app/film';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {


  @Input() catName: string;
  filmList: Observable<Film[]>;
  menuVisible: string;
  currentFilmId: string;
  translateX: number = 0;
  readonly baseUrl: string = "https://mfiagg0fp7.execute-api.us-east-1.amazonaws.com/genre?category=";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFilms();
    this.menuVisible = "hidden"
    this.currentFilmId = "";
  }

  getFilms() {
    this.filmList = this.http.get<Film[]>(this.baseUrl + this.catName);
  }

  // TODO if the list is at the beginning/end then
  // it should automatically jump to the opposite side

  // functions to alter the x position of the list
  cycleNext() {
    this.translateX -= 20;
  }

  cyclePrev() {
    // only move left if the slider is not at the beginning
    if (this.translateX < 0) {
      this.translateX += 20;
    }
  }


  showMenu(imdbId: string) {
    this.menuVisible = "visible";
    this.currentFilmId = imdbId;
  }

}
