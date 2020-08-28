import { TestBed } from '@angular/core/testing';

import { LcommserService } from './lcommser.service';

describe('LcommserService', () => {
  let service: LcommserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcommserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
