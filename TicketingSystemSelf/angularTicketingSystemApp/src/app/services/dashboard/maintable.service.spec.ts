import { TestBed } from '@angular/core/testing';

import { MaintableService } from './maintable.service';

describe('MaintableService', () => {
  let service: MaintableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
