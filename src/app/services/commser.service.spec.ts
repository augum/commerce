import { TestBed } from '@angular/core/testing';

import { CommserService } from './commser.service';

describe('CommserService', () => {
  let service: CommserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
