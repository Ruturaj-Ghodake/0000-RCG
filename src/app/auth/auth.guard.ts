import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorServiceService } from '../services/doctor-service.service';

@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {

  constructor(private docService:DoctorServiceService, private router:Router){}

  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if(this.docService.isLoggedIn()){
        return true;
      }

      this.router.navigate(['login']);
      return false;
    }
  
}
