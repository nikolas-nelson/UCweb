import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../services/firestore.service';
import {Rule} from '../models/rule';
import * as AOS from 'aos';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  public videos;
  public rules: Rule[];

  constructor(
  private firestoreService: FirestoreService) { }

  ngOnInit() {
    AOS.init();
    // this.videoService.getVideos()
    //   .subscribe(data => this.videos = data);

    this.firestoreService.getRules().subscribe(rules => {
    this.rules = rules;
    } );
  }

}
