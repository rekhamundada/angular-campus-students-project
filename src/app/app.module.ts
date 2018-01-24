import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { CampusesComponent } from './campus/campuses.component';
// import { HomeComponent } from './home/home.component';
import { AllCampusesService } from './services/all-campuses.service';
import { AppRoutingModule, routablecomponents, } from './app-routing.module';
import { AllStudentsComponent} from './student/all-students.component';
import { StudentComponent } from './student/student.component';
import { AllStudentsService } from './services/all-students.service';
// import { SingleCampusComponent } from './campus/single-campus.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routablecomponents,
    AllStudentsComponent,
    StudentComponent,
  //  SingleCampusComponent
   // NavbarComponent,
   // CampusesComponent,
    // HomeComponent
  ],
  providers:
   [AllCampusesService,
    AllStudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
