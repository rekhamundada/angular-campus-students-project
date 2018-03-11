import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { Campuses } from './../models/campus-model';
import 'rxjs/add/operator/do';

@Injectable()
export class AllCampusesService {
  private campuses: Campuses[];
  // private campusUrl: 'assets/campuses.json';
  private campusUrl: 'api/campuses';
  constructor(private http: HttpClient) { }

// getCampuses(): Observable<Campuses[]> {
//   return this.http
//     .get<Campuses[]>(this.campusUrl)
//     .pipe(
//       tap(data => console.log(JSON.stringify(data))),
//       tap(data => this.campuses = data),
//       catchError(this.handleError)
//     );
// }
getCampuses(): Observable<Campuses[]> {
    return this.http.get<Campuses[]>('api/campuses')
    .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
 }
private handleError(error: Response) {
  const msg = `Error status code ${error.status} at ${error.url}`;
  return Observable.throw(msg + 'nnnnn');
  }

  getCampus(id: number): Observable<Campuses>  {
    return this.getCampuses()
      .map(campuses => campuses.find( campus =>
      campus.campusId === id));
  }
}

