
import { Students } from './../models/students-model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { catchError, tap, map } from 'rxjs/operators';
import { Campuses } from '../models/campus-model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AllStudentsService {
  private students: Students[];
  private studentUrl = 'api/students';
  private stud = Students;

  studentsChanged = new BehaviorSubject<Students | null>(null);
  selectStudentsChanged = this.studentsChanged.asObservable();

  constructor( private http: HttpClient) { }

  getStudents(): Observable<Students[]> {
    return this.http
    .get<Students[]>(this.studentUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.students = data),
        catchError(this.handleError)
      );
  }

  getStudentsByCampusId(id: number) {
     console.log('this is campus id passed from ui', id);
     return this.getStudents()
      .map(students =>  students.filter(
        students1 => students1.campusID === id ));
  }
  // return this.getCampuses()
  // .map(campuses => campuses.find( campus =>
  // campus.campusId === id));
  getSingleStudent(id: number): Observable<Students> {
    if (id === 0) {
      return of (this.initializeStudent());
    }
     return this.getStudents()
      .map(students =>  students.find(
        student => student.studentId  === id ));
  }

  private handleError(error: Response) {
    const msg = `Error status code ${error.status} at ${error.url} and ${error}`;
    return Observable.throw(msg);
  }

  createStudent(newStudent: Students): Observable<Students> {
    return this.http.post('api/students', newStudent, httpOptions)
    .pipe(
      tap((newStudent1: Students) => console.log(`added hero w/ studentId=${newStudent1.studentId}`)),
      catchError(this.handleError)
     // catchError(this.handleError<Students>('createStudent'))
    );

    // console.log('hhehheh');
    //  return this.http.post<Students>('api/students', newStudent, httpOptions).pipe(
    //   tap((data: Students) => console.log('hhehheh' + data)),
    //       // tap((data: Students) => this.students.push(data)),
    //       catchError(this.handleError)
    //   );
  }
  updateStudent(newStudent: Students): Observable<Students> {
  const  url = `${this.studentUrl}${newStudent.studentId}`;
  return this.http.put(url, newStudent, httpOptions)
    .pipe(
      tap(data => console.log('update student' + newStudent.studentId)),
      catchError(this.handleError)
    );
  }

  saveStudent(student: Students): Observable<Students> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (student.studentId === 0) {
      return this.createStudent(student);
    }
    return this.updateStudent(student);
  }

  changeSelectedStudent(selectedStudent: Students | null):  void {
    this.studentsChanged.next(selectedStudent);
  }

  private handleError1<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private initializeStudent(): Students {
    return {
    'studentId': 0,
      name: '',
      email: '',
      gpa: 0,
      campus: '',
      campusID: 0,
    };
  }


}

