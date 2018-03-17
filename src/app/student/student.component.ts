import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

import { Students } from '../models/students-model';
import { AllStudentsService } from '../services/all-students.service';
import { Subscription } from 'rxjs/Subscription';
import { StudentEditComponent } from './student-edit.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Students[];
  student: Students;
  errorMessage: string;
  sub: Subscription;

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
  this.sub = this.allStudentsService.getSingleStudent(id)
    .subscribe(
      student => this.student = student,
      error => this.errorMessage = <any>error
    );
 }
 onBack() {
  this.router.navigate(['/students']);
 }
 onEdit() {
  this.router.navigate(['/students', this.student.id, 'edit']);
 }

}

// this.productService.deleteProduct(this.product.id)
// .subscribe(
//     () => this.onSaveComplete(`${this.product.productName} was deleted`),
//     (error: any) => this.errorMessage = <any>error
// );
