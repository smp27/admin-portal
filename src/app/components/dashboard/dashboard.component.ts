import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application/application.service';
import { AdminService } from '../../services/admin/admin.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Application:any = [];
  Admin:any = [];
  User:any = [];

  constructor(
    private applicationService: ApplicationService, 
    private adminService: AdminService, 
    private userService: UserService) {
      this.readApplication();
      this.readAdmin();
      this.readUser();
  }

  ngOnInit() {
  }

  readApplication(){
    this.applicationService.getApplications().subscribe((data) => {
     this.Application = data;
    })
  }

  readAdmin(){
    this.adminService.getAdmins().subscribe((data) => {
     this.Admin = data;
    })
  }

  readUser(){
    this.userService.getUsers().subscribe((data) => {
     this.User = data;
    })
  }

}
