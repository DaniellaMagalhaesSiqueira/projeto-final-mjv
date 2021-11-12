import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/features/user/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router){}

  user?: User;
  canActivate(): boolean {
    const userStorage = sessionStorage.getItem('user');
    
    if(userStorage){
      this.user = JSON.parse(userStorage);
      if(this.user!.isAdmin){
        return true;
      }
    }
    this.router.navigateByUrl('login');
    return false;
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  }
  
}
