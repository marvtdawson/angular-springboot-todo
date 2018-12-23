import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  siteName = this.siteData.siteName;

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
