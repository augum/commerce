import { TestBed } from '@angular/core/testing';

import { LconsstegService } from './lconssteg.service';

describe('LconsstegService', () => {
  let service: LconsstegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LconsstegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
