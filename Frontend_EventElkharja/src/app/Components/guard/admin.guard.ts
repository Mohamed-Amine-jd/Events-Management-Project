import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AgentGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('email') && localStorage.getItem('role')  == 'admin') {
      this.router.navigate(['crud']);
      return true;
    } else
      if (localStorage.getItem('email') && localStorage.getItem('role')  == 'user') {
        this.router.navigate(['home']);
        return true;
      }
        else
      this.router.navigate(['login']);
      return false;

  }
}