import { TestBed } from '@angular/core/testing';

import { LsortieService } from './lsortie.service';

describe('LsortieService', () => {
  let service: LsortieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LsortieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
