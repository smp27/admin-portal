import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SuperadminService } from './superadmin/superadmin.service';
import {Router} from '@angular/router';

@Injectable()

export class AuthguardService implements CanActivate {

  constructor(private auth: SuperadminService, private myRoute: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isLoggedIn()) {
        return true;
      } else {
        this.myRoute.navigate(["login"]);
        return false;
      }
  }
}