import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityUtilsService } from '../services/security/security-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private securityService: SecurityUtilsService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.securityService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
