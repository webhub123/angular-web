import { UserService } from './service/user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareGuard implements CanActivate  {


  constructor(private user: UserService, private route: Router) {}

  canActivate() : boolean {

    if(this.user.loggedIn()) {
       
      return true
    }else {
      this.route.navigate(['/login'])
      return false
    }

  }


}
