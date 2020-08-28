import { TestBed } from '@angular/core/testing';

import { ChariotService } from './chariot.service';

describe('ChariotService', () => {
  let service: ChariotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChariotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
