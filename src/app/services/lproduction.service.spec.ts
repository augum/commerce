import { TestBed } from '@angular/core/testing';

import { LproductionService } from './lproduction.service';

describe('LproductionService', () => {
  let service: LproductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LproductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
