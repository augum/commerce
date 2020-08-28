import { TestBed } from '@angular/core/testing';

import { RecoufService } from './recouf.service';

describe('RecoufService', () => {
  let service: RecoufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
