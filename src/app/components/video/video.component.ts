import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoUrl } from 'src/app/videourl';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public filmId: string;
  apiResponse: VideoUrl[];
  videoUrl: string;
  safeUrl: any;

  readonly baseUrl: string = "https://gdmvb87xyf.execute-api.us-east-1.amazonaws.com/Prod/film-link?imdbID=";


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private domSanitizer: DomSanitizer
  ) {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.getAll("videoId")[0];
    this.getVideo();
    console.log(this.videoUrl)
  }

  // function to get the url for the film 
  getVideo() {
    this.http.get<VideoUrl[]>(this.baseUrl + this.filmId).subscribe(
      data => {
        this.apiResponse = data;
        console.log(this.videoUrl)
        this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(data[0].filmPath);
      },
      error => {
        // TODO redirect to homepage if film not found etc
      }
    );
  }

}
