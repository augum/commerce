import { TestBed } from '@angular/core/testing';

import { LlivrService } from './llivr.service';

describe('LlivrService', () => {
  let service: LlivrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlivrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
