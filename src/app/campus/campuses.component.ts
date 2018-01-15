import { Component, OnInit, Input } from '@angular/core';
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
  name: String = 'Rekha!!!!!';
  @Input()
  campuses: Campuses[];
  constructor(
    private allCampusesService: AllCampusesService
  ) { }

  ngOnInit() {
    this.campuses = this.allCampusesService.getCampuses();
  }
}
