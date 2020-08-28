import { TestBed } from '@angular/core/testing';

import { LivrService } from './livr.service';

describe('LivrService', () => {
  let service: LivrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
