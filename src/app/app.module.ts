import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { SiteDataService } from '../providers/site-data/site-data.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'todos', component: ListTodosComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ListTodosComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [SiteDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
