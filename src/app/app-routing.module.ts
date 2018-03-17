import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CampusesComponent } from './campus/campuses.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AllStudentsComponent } from './student/all-students.component';
import { StudentComponent } from './student/student.component';
import { StudentEditComponent } from './student/student-edit.component';
import { SingleCampusComponent } from './campus/single-campus.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full' , redirectTo: ''},
  {path: '' , component: NavbarComponent},
  {path: 'homepage' , component:  HomeComponent},
  {path: 'campuses' , component: CampusesComponent },
  {path: 'campuses/:campusId' , component: SingleCampusComponent},
  {path: 'students' , component: AllStudentsComponent},
  {path: 'students/:id' , component: StudentComponent},
  {path: 'students/:id/edit' , component: StudentEditComponent },
  {path: 'students/:id/delete' , component: StudentEditComponent },
  {path: 'students/:campusId/campus', component: AllStudentsComponent },
  //  {path: 'campuses/:campusId/edit', component: StudentEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routablecomponents = [
  HomeComponent,
  CampusesComponent,
  NavbarComponent,
  SingleCampusComponent
];
