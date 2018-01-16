import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Campuses } from '../models/campus-model';
import { createCampuses } from '../models/test-data-campuses';

@Injectable()
export class AllCampusesService {
  constructor(private http: Http) { }

  getCampuses() {
    // return createCampuses();
   return this.http
   .get('assets/campuses.json')
    .map((response: Response) => <Campuses[]> response.json().data)
    .catch(this.handleError);
    // we can use toPromise here to make it promise instead of observable
}
private handleError(error: Response) {

  const msg = `Error status code ${error.status} at ${error.url}`;
  console.log(msg);
  return Observable.throw(msg);
  }
}
