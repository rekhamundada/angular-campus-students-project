import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { AllCampusesService } from './services/all-campuses.service';
import { AppRoutingModule, routablecomponents, } from './app-routing.module';
import { AllStudentsComponent} from './student/all-students.component';
import { StudentComponent } from './student/student.component';
import { AllStudentsService } from './services/all-students.service';

import { NewCampusComponent } from './campus/new-campus.component';
import { StudentEditComponent } from './student/student-edit.component';
import { MaterialModule } from './material.module';
import { InMemoryDataService } from './services/in-memory-data-service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule ,
    FormsModule ,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    routablecomponents,
    AllStudentsComponent,
    StudentComponent,
    NewCampusComponent,
    StudentEditComponent,
  ],
  providers:
   [AllCampusesService,
    AllStudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
