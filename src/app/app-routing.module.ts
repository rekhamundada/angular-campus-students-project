import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CampusesComponent } from './campus/campuses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SingleCampusComponent } from './campus/single-campus.component';
import { AllStudentsComponent } from './student/all-students.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full' , redirectTo: ''},
  {path: '' , component: NavbarComponent},
  {path: 'homepage' , component:  HomeComponent},
  {path: 'campuses' , component: CampusesComponent },
  {path: 'campuses/:campusId' , component: SingleCampusComponent},
  {path: 'students' , component: AllStudentsComponent},
  {path: 'students/:id' , component: StudentComponent}
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
