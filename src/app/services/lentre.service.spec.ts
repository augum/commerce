import { TestBed } from '@angular/core/testing';

import { LentreService } from './lentre.service';

describe('LentreService', () => {
  let service: LentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
