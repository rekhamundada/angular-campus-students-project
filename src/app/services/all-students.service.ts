import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Students } from '../models/students-model';
import { Campuses } from '../models/campus-model';



@Injectable()
export class AllStudentsService {

  constructor( private http: Http) { }

  getStudents(): Observable<Students[]> {
    return this.http
    .get('api/students.json')
      .map(response => response.json().data)
       .catch(this.handleError);
  }

  getStudentsByCampusId(id: number) {
     console.log('this is campus id passed from ui', id);
     return this.getStudents()
      .map(students =>  students.filter(
        students1 => students1.campusID === id ));
    // return [ {
    //   'studentId': 1,
    //   'name': 'Sumit',
    //   'email': 'sumitmundada@gmail.com',
    //   'gpa': 2.3,
    //   'campus': 'CTS',
    //   'campusID': 1
    // }];
  }
  // return this.getCampuses()
  // .map(campuses => campuses.find( campus =>
  // campus.campusId === id));
  getSingleStudent(id: number) {
    return this.getStudents()
      .map(students =>  students.find(
        student => student.studentId  === id ));
  }
  private handleError(error: Response) {
    const msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
    }

}
