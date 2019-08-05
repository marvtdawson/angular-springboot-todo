import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.username);
    if (this.username === 'marvintdawson' && this.password === 'abc123') {
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]).then().catch();
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }

  }

}
