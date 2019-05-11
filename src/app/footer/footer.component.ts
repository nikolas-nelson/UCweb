import { Component, OnInit } from '@angular/core';
import {ClashstatsService} from '../services/clashstats.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public clan: any;
  public year: any = new Date().getFullYear();

  constructor(private  clashStats: ClashstatsService) { }

  ngOnInit() {
    // GET DATA FROM Clash Stats API
    this.clashStats.getStats().subscribe(stats => {
      this.clan = stats;
    });

    AOS.init();
  }

}
