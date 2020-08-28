import { TestBed } from '@angular/core/testing';

import { LdevisService } from './ldevis.service';

describe('LdevisService', () => {
  let service: LdevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LdevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
