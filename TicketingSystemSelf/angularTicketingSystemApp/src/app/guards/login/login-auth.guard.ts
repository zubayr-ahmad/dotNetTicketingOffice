import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  constructor(private _loginService:LoginService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('userLoginStatus') == 'true'){
        this._loginService.isUserLoggedIn.next(true)
        return true;
      }
      else{
        this._loginService.isUserLoggedIn.next(false)
        this.route.navigate(['/loginForm'])
        return false;
      }
      
  };

  
  
  
}
