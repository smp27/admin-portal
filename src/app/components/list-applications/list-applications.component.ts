import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application/application.service';

@Component({
  selector: 'app-list-applications',
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.css']
})

export class ListApplicationsComponent implements OnInit {
  
  Application:any = [];

  constructor(private applicationService: ApplicationService) { 
    this.readApplication();
  }

  ngOnInit() {}

  readApplication(){
    this.applicationService.getApplications().subscribe((data) => {
     this.Application = data;
    })    
  }

  removeApplication(application, index) {
    if(window.confirm('Are you sure?')) {
        this.applicationService.deleteApplication(application._id).subscribe((data) => {
          this.Application.splice(index, 1);
        }
      )    
    }
  }

}
