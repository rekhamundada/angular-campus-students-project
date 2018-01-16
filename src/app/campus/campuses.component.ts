import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Campuses } from '../models/campus-model';
import { AllCampusesService } from '../services/all-campuses.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-camuses',
  templateUrl: 'campuses.component.html',
  styleUrls: ['campuses.component.css'],
  // providers: [AllCampusesService]
})

export class CampusesComponent implements OnInit {
  errorMessage: string;
  name: String = 'Rekha!!!!!';
  campuses: Observable<Campuses[]>;

  constructor(
    private allCampusesService: AllCampusesService
  ) { }
getAllCampuses() {
// this.campuses = this.allCampusesService.getCampuses();
 this.campuses = this.allCampusesService.getCampuses();
  // .subscribe(
  //   campuses => this.campuses = campuses,
  //   error => this.errorMessage = <any>error
  // );
}
  ngOnInit() {
    this.getAllCampuses();
  }
}
