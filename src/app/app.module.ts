import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CampusesComponent } from './campus/campuses.component';
import { AllCampusesService } from './services/all-campuses.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    CampusesComponent,
    HomeComponent
  ],
  providers: [AllCampusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
