import { TestBed } from '@angular/core/testing';

import { FactfService } from './factf.service';

describe('FactfService', () => {
  let service: FactfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
