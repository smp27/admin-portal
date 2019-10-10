import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SuperadminService } from './superadmin/superadmin.service';
import {Router} from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Injectable()

export class AuthguardService implements CanActivate {

  constructor(private auth: SuperadminService, private myRoute: Router) { }

  Data: any = [];

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.isLoggedIn().pipe(map(e => {
      this.Data = e;
        if (this.Data.success) {
            return true;
        } else {
          this.myRoute.navigate(['/login']);
        }
      }), catchError((err) => {
          this.myRoute.navigate(['/login']);
          return of(false);
      })
    );
  }
}