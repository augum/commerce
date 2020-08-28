import { TestBed } from '@angular/core/testing';

import { LfavoirService } from './lfavoir.service';

describe('LfavoirService', () => {
  let service: LfavoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfavoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
