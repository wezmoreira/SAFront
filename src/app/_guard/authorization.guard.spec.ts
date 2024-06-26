import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthorizationGuard } from './authorization.guard';
import { SecurityUtilsService } from '../services/security/security-utils.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorizationGuard', () => {
  let guard: AuthorizationGuard;
  let securityService: SecurityUtilsService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthorizationGuard, SecurityUtilsService],
    });
    guard = TestBed.inject(AuthorizationGuard);
    securityService = TestBed.inject(SecurityUtilsService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if user is authenticated', () => {
    spyOn(securityService, 'isAuthenticated').and.returnValue(true);
    expect(guard.canActivate()).toBe(true);
  });

  it('should navigate to "/" and return false if user is not authenticated', () => {
    spyOn(securityService, 'isAuthenticated').and.returnValue(false);
    spyOn(router, 'navigate');
    expect(guard.canActivate()).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});