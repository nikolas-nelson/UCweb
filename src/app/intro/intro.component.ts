import {Component, OnInit} from '@angular/core';
import {VideosService} from '../videos.service';
import {FirestoreService} from '../firestore.service';
import {Rule} from '../models/rule';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  public videos;
  public rules: Rule[];

  constructor(private videoService: VideosService,
  private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.videoService.getVideos()
      .subscribe(data => this.videos = data);

    this.firestoreService.getRules().subscribe(rules => {
    this.rules = rules;
    } );
  }

}
