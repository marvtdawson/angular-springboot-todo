import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: 'marvintdawson@gmail.com';
  password: 'dummy';
  errorMessage = 'Invalid Credentials';
  invaliddLogin = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.username);
    if (this.username === 'marvintdawson@gmail.com' && this.password === 'dummy') {
      this.invaliddLogin = false;
    } else {
      this.invaliddLogin = true;
    }

  }

}
