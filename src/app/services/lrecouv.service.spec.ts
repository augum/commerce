import { TestBed } from '@angular/core/testing';

import { LrecouvService } from './lrecouv.service';

describe('LrecouvService', () => {
  let service: LrecouvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LrecouvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
