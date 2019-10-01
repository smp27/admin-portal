import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-list-admins',
  templateUrl: './list-admins.component.html',
  styleUrls: ['./list-admins.component.css']
})

export class ListAdminsComponent implements OnInit {
  
  Admin:any = [];

  constructor(private adminService: AdminService) { 
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
