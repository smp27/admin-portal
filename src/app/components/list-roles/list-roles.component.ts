import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role/role.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})

export class ListRolesComponent implements OnInit {
  
  Role:any = [];

  constructor(private roleSerivce: RoleService) { 
    this.readRole();
  }

  ngOnInit() {}

  readRole(){
    this.roleSerivce.getRoles().subscribe((data) => {
     this.Role = data;
    })    
  }

  removeRole(role, index) {
    if(window.confirm('Are you sure?')) {
        this.roleSerivce.deleteRole(role._id).subscribe((data) => {
          this.Role.splice(index, 1);
        }
      )    
    }
  }

}

