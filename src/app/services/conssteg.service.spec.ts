import { TestBed } from '@angular/core/testing';

import { ConsstegService } from './conssteg.service';

describe('ConsstegService', () => {
  let service: ConsstegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsstegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
