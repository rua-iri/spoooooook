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

  // TODO only one menu should be allowed open at a time

  @Input() catName: string;
  filmList: Observable<Film[]>;
  menuVisible: string;
  currentFilmId: string;
  translateX: number = 0;
  readonly baseUrl: string = "https://gdmvb87xyf.execute-api.us-east-1.amazonaws.com/Prod/films?category=";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFilms();
    this.menuVisible = "none"
    this.currentFilmId = "";
  }

  getFilms() {
    this.filmList = this.http.get<Film[]>(this.baseUrl + this.catName);
    console.log(this.filmList)
  }


  // functions to alter the x position of the list
  cycleNext() {
    this.filmList.subscribe((result) => {

      console.log(this.translateX)

      if (this.translateX <= ((result.length - 1) * -25)) {
        this.translateX = 0;
      } else {
        this.translateX -= 25;
      }

    })
  }

  cyclePrev() {
    // only move left if the slider is not at the beginning
    if (this.translateX < 0) {
      this.translateX += 25;

    } else if (this.translateX === 0) {

      this.filmList.subscribe((result) => {

        for (let i = 0; i < result.length - 1; i++) {
          this.translateX -= 25;
        }

      })

    }
  }


  showMenu(imdbId: string) {
    this.menuVisible = "block";
    this.currentFilmId = imdbId;
  }


  menuVisibleHandler(visibility: string) {
    console.log(visibility);
    this.menuVisible = visibility;
  }

}
