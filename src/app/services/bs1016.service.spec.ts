import { TestBed } from '@angular/core/testing';

import { Bs1016Service } from './bs1016.service';

describe('Bs1016Service', () => {
  let service: Bs1016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bs1016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
