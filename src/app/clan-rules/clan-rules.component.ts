import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FirestoreService} from '../services/firestore.service';
import {Rule} from '../models/rule';
import * as AOS from 'aos';

@Component({
  selector: 'app-clan-rules',
  templateUrl: './clan-rules.component.html',
  styleUrls: ['./clan-rules.component.scss']
})
export class ClanRulesComponent implements OnInit {

  public rules: Rule[];

  constructor(private http: HttpClient,
              private firestoreService: FirestoreService) {
  }

  ngOnInit() {
    // GET DATA FROM Firebase
    this.firestoreService.getRules().subscribe(rules => {
      this.rules = rules;
    });
    AOS.init();
  }

}
