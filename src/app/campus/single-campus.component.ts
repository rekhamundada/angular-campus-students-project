import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AllCampusesService } from '../services/all-campuses.service';
import { Campuses } from '../models/campus-model';



@Component({
  moduleId: module.id,
  selector: 'app-campus',
  templateUrl: 'single-campus.component.html',
  styleUrls: ['single-campus.component.css']
})

export class SingleCampusComponent implements OnInit {
  errorMessage: string;
  campus: Campuses;
 // @Input() campuses: Campuses;
 name1 = 'Child Component';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private allCampusesService: AllCampusesService,
  ) {
    // we can use snapshot or observable
     // (this.route.snapshot.paramMap.get('campusId'));
  }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('campusId');
    // if (param) {
    //  const  id = param;
    //   this.getstudent(id);;
  //  this.name1 += `: ${param}`;
    if (param) {
      const campusId = param;
      this.getSingleCampus(campusId);
    }
  }
  private getSingleCampus(id: number) {
    this.allCampusesService.getCampus(id)
    .subscribe(
      campus => this.campus = campus,
      error => this.errorMessage = error
    );
  }
  getStudentsByCampus(campusId: number) {
    this.router.navigate(['/students', 'campus.campusId', 'campus']);
  }
  
  onBack(): void {
    this.router.navigate(['/campuses']);
  }
}
