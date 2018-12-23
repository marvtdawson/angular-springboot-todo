import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../../providers/site-data/site-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  siteName = this.siteData.siteName;

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
