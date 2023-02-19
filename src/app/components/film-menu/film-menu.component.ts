import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmDetails } from 'src/app/filmDetails';

@Component({
  selector: 'app-film-menu',
  templateUrl: './film-menu.component.html',
  styleUrls: ['./film-menu.component.css']
})
export class FilmMenuComponent implements OnChanges {

  @Input() currentFilmId: string;
  @Output() menuVisible = new EventEmitter<string>();
  filmSpecifics: Observable<FilmDetails[]>
  readonly baseUrl: string = "https://zkxb1yonjc.execute-api.us-east-1.amazonaws.com/FilmDetails?imdbID=";

  constructor(private http: HttpClient) { }

  ngModelChange() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getFilmDetails();
  }


  getFilmDetails() {
    if (this.currentFilmId) {
      this.filmSpecifics = this.http.get<FilmDetails[]>(this.baseUrl + this.currentFilmId);
    }
  }

  closeMenu() {
    this.menuVisible.emit("none");
  }

}
