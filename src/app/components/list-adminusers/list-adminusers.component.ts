import { Component, OnInit } from '@angular/core';
import { AdminuserService } from '../../services/adminuser/adminuser.service';

@Component({
  selector: 'app-list-adminusers',
  templateUrl: './list-adminusers.component.html',
  styleUrls: ['./list-adminusers.component.css']
})

export class ListAdminusersComponent implements OnInit {
  
  Admin:any = [];

  constructor(private adminService: AdminuserService) { 
    this.readAdmin();
  }

  ngOnInit() {}

  readAdmin(){
    this.adminService.getAdmins().subscribe((data) => {
     this.Admin = data;
    })    
  }

  removeAdmin(admin, index) {
    if(window.confirm('Are you sure?')) {
        this.adminService.deleteAdmin(admin._id).subscribe((data) => {
          this.Admin.splice(index, 1);
        }
      )    
    }
  }

}
