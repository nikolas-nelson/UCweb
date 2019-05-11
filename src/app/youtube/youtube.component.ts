import { Component, OnInit } from '@angular/core';
import {VideosService} from '../services/videos.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  public videos: any;
  public items = [];

  constructor(private videosService: VideosService) { }

  ngOnInit() {
    // GET DATA FROM YouTube
    this.videosService.getVideos().subscribe(response => {
      this.videos = response;
      this.items = this.videos.items;
    });

    AOS.init();
  }

}
