import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application/application.service';
import { AdminuserService } from '../../services/adminuser/adminuser.service';
import { RoleService } from '../../services/role/role.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Application:any = [];
  Adminuser:any = [];
  Role:any = [];

  constructor(
    private applicationService: ApplicationService, 
    private adminService: AdminuserService, 
    private roleService: RoleService) {
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
     this.Adminuser = data;
    })
  }

  readUser(){
    this.roleService.getRoles().subscribe((data) => {
     this.Role = data;
    })
  }

}
