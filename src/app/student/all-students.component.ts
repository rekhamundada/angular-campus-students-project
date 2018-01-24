import { Component, OnInit } from '@angular/core';
import { Students } from '../models/students-model';
import { AllStudentsService } from '../services/all-students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
students: Students[];
errorMessage: string;

  constructor(private allStudentsService: AllStudentsService) { }

  getAllStudents() {
    this.allStudentsService
    .getStudents().subscribe(
      students => this.students = students,
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getAllStudents();
  }

}
