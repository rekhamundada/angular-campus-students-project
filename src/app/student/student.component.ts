import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import { Students } from '../models/students-model';
import { AllStudentsService } from '../services/all-students.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Students;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private allStudentsService: AllStudentsService,
    private router: Router
  ) { }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');

    if (param) {
     const  id = param;
      this.getstudent(id);
    }

  }
getstudent(id) {
  this.allStudentsService.getSingleStudent(id)
    .subscribe(
      student => this.student = student,
      error => this.errorMessage = <any>error
    );
 }
 onBack() {
  this.router.navigate(['/students'])
 }
}
