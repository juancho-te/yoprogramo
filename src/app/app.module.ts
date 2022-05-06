import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { EducationComponent } from './components/education/education.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';







@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    LoginComponent,
    AboutComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
