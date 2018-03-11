
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Campuses } from '../models/campus-model';
import { AllCampusesService } from '../services/all-campuses.service';

import 'rxjs/add/operator/map';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-camuses',
  templateUrl: 'campuses.component.html',
  styleUrls: ['campuses.component.css'],
})

export class CampusesComponent implements OnInit {
  errorMessage: string;
  name: String = 'Rekha!!!!!';
  campuses: Campuses[];
  // dataSource = new MatTableDataSource <Campuses>();
  // displayedColumns = ['campusId', 'campusName', 'campusDetails'];

  constructor(
    private allCampusesService: AllCampusesService
  ) { }

  ngOnInit() {
    this.getAllCampuses();
  }
  getAllCampuses() {
    // this.campuses = this.allCampusesService.getCampuses();
   this.allCampusesService.getCampuses()
      .subscribe(
        campuses => this.campuses = campuses,
        error => this.errorMessage = <any>error
      );
    }
}
