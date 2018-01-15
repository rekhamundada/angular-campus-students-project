import { Injectable } from '@angular/core';
import { Campuses } from '../models/campus-model';
import { createCampuses } from '../models/test-data-campuses';

@Injectable()
export class AllCampusesService {
  //private campuses: Campuses[];

  constructor() { }

  getCampuses() {
    return createCampuses();
}
}
