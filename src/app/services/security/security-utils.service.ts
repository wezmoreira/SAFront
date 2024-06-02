import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../signup/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SecurityUtilsService {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  grantedAuthorization(key: string) {
    localStorage.setItem('token', key);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  login(data: any): Observable<any> {
    return this.loginService.login(data);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token && !this.isTokenExpired(token);
  }

  private isTokenExpired(token: string): boolean {
    return true; //TODO - implementar
  }
}
