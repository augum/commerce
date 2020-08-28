import { TestBed } from '@angular/core/testing';

import { LrecoufService } from './lrecouf.service';

describe('LrecoufService', () => {
  let service: LrecoufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrecoufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
