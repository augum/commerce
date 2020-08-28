import { TestBed } from '@angular/core/testing';

import { LprelevementService } from './lprelevement.service';

describe('LprelevementService', () => {
  let service: LprelevementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LprelevementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
