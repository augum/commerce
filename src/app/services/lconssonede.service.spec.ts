import { TestBed } from '@angular/core/testing';

import { LconssonedeService } from './lconssonede.service';

describe('LconssonedeService', () => {
  let service: LconssonedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LconssonedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
