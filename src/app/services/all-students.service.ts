
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
  private campus: Campuses;
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
        students1 => students1.campusId === id ));
  }
  // return this.getCampuses()
  // .map(campuses => campuses.find( campus =>
  // campus.campusId === id));
  getSingleStudent(id: number): Observable<Students> {
    if (id === 0) {
      return of (this.initializeStudent());
    } else {
     return this.getStudents()
      .map(students =>  students.find(
        student1 => student1.id  == id ));
      }
  }

  private handleError(error: Response) {
    const msg = `Error status code ${error.status} at ${error.url} and ${error}`;
    return Observable.throw(msg);
  }

  createStudent(newStudent: Students): Observable<Students> {
    return this.http.post('api/students', newStudent, httpOptions)
    .pipe(
      tap((newStudent1: Students) => console.log(`added hero w/ studentId=${newStudent1.id}`)),
      catchError(this.handleError)
    );
  }
  updateStudent(student: Students): Observable<Students> {
   const  url = `${this.studentUrl}${student.id}`;
  // this.studentUrl + '/' + student.id
  return this.http.put(this.studentUrl + '/' + student.id, student, httpOptions)
    .pipe(
      tap(data => console.log('update student' + student)),
      catchError(this.handleError)
    );
  }

  saveStudent(student: Students): Observable<Students> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (student.id === 0) {
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
      id: 0,
      name: '',
      email: '',
      gpa: 0,
      campus: '',
      campusId: 0
    };
  }
  deleteStudent(id: number): Observable<any> {
   // const  url = `${this.studentUrl}${id}`;
    return this.http.delete(this.studentUrl + '/' + id, httpOptions)
      .do(data => console.log('deleteStudent' + JSON.stringify(data)))
      . catch( this.handleError);
  }

}

