import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../services/firestore.service';
import {Rule} from '../models/rule';
import {HttpClient} from '@angular/common/http';
import * as AOS from 'aos';
import {VideosService} from '../services/videos.service';
import {ClaninfoService} from '../services/claninfo.service';




@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  public videos: any;
  public items = [];
  public rules: Rule[];
  public clan: any;

  constructor(private http: HttpClient, private videosService: VideosService,
              private firestoreService: FirestoreService, private clanService: ClaninfoService) {

  }

  ngOnInit() {
    this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLiePhqa3Nl2fj6BENXPO-WtYz7FDW-WwN&key=AIzaSyCJULnoBnkfPpFZMsZPiGnIVuF__qhEAAg')
      .subscribe(response => {
        this.videos = response;
        this.items = this.videos.items;
      });

    // Retrieve posts from the API
    this.clanService.getAllInfo().subscribe(data => {
      this.clan = data;
      console.log(this.clan);
    });

    this.firestoreService.getRules().subscribe(rules => {
      this.rules = rules;
    });
    AOS.init();
  }


}
