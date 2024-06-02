import { TestBed } from '@angular/core/testing';

import { SecurityUtilsService } from './security-utils.service';

describe('SecurityUtilsService', () => {
  let service: SecurityUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
