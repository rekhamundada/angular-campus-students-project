import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AllCampusesService } from './services/all-campuses.service';
import { AppRoutingModule, routablecomponents, } from './app-routing.module';
import { AllStudentsComponent} from './student/all-students.component';
import { StudentComponent } from './student/student.component';
import { AllStudentsService } from './services/all-students.service';
import { InMemoryDataService } from './services/in-memory-data-service';
import { NewCampusComponent } from './campus/new-campus.component';
import { StudentEditComponent } from './student/student-edit.component';




@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routablecomponents,
    AllStudentsComponent,
    StudentComponent,
    NewCampusComponent,
    StudentEditComponent,
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
