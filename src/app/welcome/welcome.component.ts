import { Component, OnInit } from '@angular/core';
import {SiteDataService} from '../../providers/site-data/site-data.service';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  siteName = this.siteData.siteName;
  welcomeMessageFromService: string;
  constructor(private siteData: SiteDataService,
              private welcomeService: WelcomeDataService) { }

  ngOnInit() {
  }

  getWelcomeMessage() {
   // console.log(this.welcomeService.executeHelloWorldBeanService());
    this.welcomeService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
   // console.log('Last Line of Get Welcome Response');
  }
  // get response data
  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    /*console.log(response);
    console.log(response.message);*/
  }
  // get error response
  handleErrorResponse(error) {
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
