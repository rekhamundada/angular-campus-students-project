import { Students } from './../models/students-model';
import { tap } from 'rxjs/operators';

import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
   // const campusId = +this.route.snapshot.paramMap.get('campusId');
    // const param = +this.route.snapshot.paramMap.get('id');
    // if (param) {
    //  const  id = param;
    //   this.getStudent(id);
    // } else {
    //  this.id  = 0;
    // }
    this.route.params
      .subscribe(params => {
        const id = +params['id'];
        this.getStudent(id);
      }
      );
  }
// submit() {
//   if (this.student.id) {
//    this.allStudentsService.updateStudent(this.student)
//     .subscribe(
//       (student: Students) => {
//         if (student) {
//           this.router.navigate(['/students']);
//         }
//       },
//         err => console.log(err)
//     );
//   } else {
//     this.allStudentsService.createStudent(this.student)
//       .subscribe(
//         (student: Students) => {
//           if (student) {
//             this.router.navigate(['/students']);
//           }
//         },
//           err => console.log(err)
//       );
//   }
// }

  updateTheStudent(id: number, form: NgForm) {
    const value = form.value;
    this.allStudentsService.updateStudent(value as Students)
      .subscribe(
        data => this.student = data,
        err => console.log(err)
      );
  }
  getStudent(id: number): void {
    this.allStudentsService.getSingleStudent(id)
      .subscribe(
        student => this.student = student
      );
  }
  saveStudent(form: NgForm): void {
     const value = form.value;
      if (this.form.valid) {
      this.allStudentsService.createStudent(value as Students)
      .subscribe(
        data => console.log(data, 'new student created'),
        err => console.log('ttttttt', err)
      );
      this.router.navigate(['/students']);
     }
  }
  onDelete(id: num): void {

    this.allStudentsService.deleteStudent(this.student.id)
    .subscribe(
     () => console.log('this.student was deleted' + (this.student.id),
     err => console.log(' Error in delete', err)
    );
    this.router.navigate(['/students']);
  }
}
