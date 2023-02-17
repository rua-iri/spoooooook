import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{
  
  public filmId: string;
  videoUrl: string;
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.getAll("videoId")[0];
  }

  // function to get the url for the film 
  getVideo() {
    
  }

}
