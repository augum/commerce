import { TestBed } from '@angular/core/testing';

import { FlivrService } from './flivr.service';

describe('FlivrService', () => {
  let service: FlivrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlivrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
