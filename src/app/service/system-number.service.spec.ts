import { TestBed } from '@angular/core/testing';

import { SystemNumberService } from './system-number.service';

describe('SystemNumberService', () => {
  let service: SystemNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
