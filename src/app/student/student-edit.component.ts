import { Students } from './../models/students-model';
import { tap } from 'rxjs/operators';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AllStudentsService } from '../services/all-students.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  pageTitle = 'Student-Details';
  @ViewChild('f') form: NgForm;
  student: Students;
  students: Students[];
  id: number;
  originalStudents: Students;

  constructor(private allStudentsService: AllStudentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.student = new Students;
    // this.route.paramMap.subscribe(
    //   params => {
    //    this.id = +params['studentId'];
    //   }
    // );
  }
  updateTheStudent(studentId: number, form: NgForm) {
    const value = form.value;
    this.allStudentsService.updateStudent(value as Students)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
  // getStudent(id: number): void {
  //   this.allStudentsService.getSingleStudent(id)
  //     .subscribe(
  //       student => console.log(student)
  //     );
  // }
  saveStudent(form: NgForm): void {
     const value = form.value;
    // if (this.form.valid) {
      this.allStudentsService.createStudent(value as Students)
      .subscribe(
        data => console.log('finding out what is returned by api', data),
        err => console.log('ttttttt', err)
      );
    // }
  }

  private initializeStudent(): Students {
    return {
      studentId: 11,
      name: 'Sumit',
      email: 'sss@gmail.com',
      gpa: 3,
      campus: 'New Academy',
      campusID: 2,
    };
  }


  // campusID: number;
}
