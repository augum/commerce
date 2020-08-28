import { TestBed } from '@angular/core/testing';

import { FavoirService } from './favoir.service';

describe('FavoirService', () => {
  let service: FavoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
