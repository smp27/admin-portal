import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  
  User:any = [];

  constructor(private userService: UserService) { 
    this.readUser();
  }

  ngOnInit() {}

  readUser(){
    this.userService.getUsers().subscribe((data) => {
     this.User = data;
    })    
  }

  removeUser(user, index) {
    if(window.confirm('Are you sure?')) {
        this.userService.deleteUser(user._id).subscribe((data) => {
          this.User.splice(index, 1);
        }
      )    
    }
  }

}

