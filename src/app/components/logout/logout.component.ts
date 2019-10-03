import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SuperadminService } from '../../services/superadmin/superadmin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private superadminService: SuperadminService, private router: Router) {
    this.logout();
  }

  logout() {
    this.superadminService.logout().subscribe((res) => {
      this.router.navigateByUrl('/');
    })
  }

  ngOnInit() {
  }

}
