import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Students } from '../models/students-model';
import { AllStudentsService } from '../services/all-students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
students: Students[];
filteredStudents: Students[];
errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private allStudentsService: AllStudentsService) { }

  getAllStudents() {
    this.allStudentsService
    .getStudents().subscribe(
      students => this.students = students,
      error => this.errorMessage = <any>error
    );
  }

getStudentsByCampus(campusId) {
  // this.filteredStudents =  this.allStudentsService
  //    .getStudentsByCampusId(campusId);
    this.allStudentsService
    .getStudentsByCampusId(campusId)
    .subscribe(
    students => this.filteredStudents = students,
    error => this.errorMessage = <any>error
  );
}
// *ngIf="!filteredStudents"
  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('campusId');

    if (param) {
      const  id = param;
      console.log('this is campus id', id);
      this.getStudentsByCampus(id);
     }

    this.getAllStudents();
  }
  editStudent() {
    this.router.navigate(['/campuses', 'campuses.id', 'edit']);
  }
}
