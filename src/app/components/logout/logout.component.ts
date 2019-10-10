import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SuperadminService } from '../../services/superadmin/superadmin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  Data: any = [];

  constructor(private superadminService: SuperadminService, private router: Router) {
    this.logout();
  }

  logout() {
    this.superadminService.logout().subscribe((res) => {
      this.Data = res;
      if(this.Data.success) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/dashboard');
      }
    })
  }

  ngOnInit() {
  }

}
