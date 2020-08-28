import { TestBed } from '@angular/core/testing';

import { LflivrService } from './lflivr.service';

describe('LflivrService', () => {
  let service: LflivrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LflivrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
