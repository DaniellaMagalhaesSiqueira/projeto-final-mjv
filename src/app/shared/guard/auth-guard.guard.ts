
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from 'src/app/features/user/models/user.model';
import { UserService } from 'src/app/features/user/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService,
    ){}

  user!: User;
  canActivate(): boolean {
    // ao invés de pegar da storage é pego da service da variável logedUser que será modificada agora com o logout
    if(this.userService.getLoggedUser()){
      this.user = this.userService.getLoggedUser()!;
      if(this.user.isAdmin){
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
