import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CampusesComponent } from './campus/campuses.component';
import { AllCampusesService } from './services/all-campuses.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CampusesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AllCampusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
