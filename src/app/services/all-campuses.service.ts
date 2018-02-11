import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

 import { Campuses } from '../models/campus-model';
 //import { Campuses } from './in-memory-data-service';
// import { createCampuses } from '../models/test-data-campuses';

@Injectable()
export class AllCampusesService {
  constructor(private http: Http) { }

  getCampuses(): Observable<Campuses[]> {
    // return createCampuses();
    // assets/campuses.json
   return this.http
   .get('http://192.168.1.11:8181/api/v1/campus')
    .map((response: Response) => <Campuses[]> response.json().data)
    .catch(this.handleError);
    // we can use toPromise here to make it promise instead of observable
}
// getCampuses(): Observable<Campuses[]> {
//   return this.http.get<Campuses[]>('assets/campuses.json')
//   .do(data => console.log('All: ' + JSON.stringify(data)))
//     .catch(this.handleError);
// }
private handleError(error: Response) {
  const msg = `Error status code ${error.status} at ${error.url}`;
  return Observable.throw(msg);
  }
  getCampus(id: number): Observable<Campuses>  {
    return this.getCampuses()
      .map(campuses => campuses.find( campus =>
      campus.campusId === id));
  }
}

