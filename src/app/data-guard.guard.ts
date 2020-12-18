import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataGuardGuard implements CanActivate {
  constructor(public route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    let name="jos";
    if(name !== "jos" ){
      return true;
    }else{
      console.log("im inside here");
      this.route.navigate(['/home']);
    }
  }

}
