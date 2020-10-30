import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-auth/hardcoded-authentication.service';
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: 'marvintdawson';
  password:  'abc123';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router,
              private hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]).then().catch();
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
