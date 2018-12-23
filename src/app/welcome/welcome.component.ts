import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  siteName = this.siteData.siteName;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
