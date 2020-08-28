import { TestBed } from '@angular/core/testing';

import { LfacService } from './lfac.service';

describe('LfacService', () => {
  let service: LfacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
