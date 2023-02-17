import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoUrl } from 'src/app/videourl';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  
  public filmId: string;
  videoUrl: Observable<VideoUrl[]>;
  readonly baseUrl: string = "https://zkxb1yonjc.execute-api.us-east-1.amazonaws.com/FilmDetails/video?imdbID=";
  

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.getAll("videoId")[0];
    this.getVideo();
  }

  // function to get the url for the film 
  getVideo() {
    this.videoUrl = this.http.get<VideoUrl[]>(this.baseUrl + this.filmId);
  }

}
