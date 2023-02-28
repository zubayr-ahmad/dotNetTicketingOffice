import { TestBed } from '@angular/core/testing';

import { LoginTransitionService } from './login-transition.service';

describe('LoginTransitionService', () => {
  let service: LoginTransitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTransitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
