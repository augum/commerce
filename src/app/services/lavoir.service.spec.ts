import { TestBed } from '@angular/core/testing';

import { LavoirService } from './lavoir.service';

describe('LavoirService', () => {
  let service: LavoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LavoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
