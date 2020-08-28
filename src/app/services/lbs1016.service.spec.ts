import { TestBed } from '@angular/core/testing';

import { Lbs1016Service } from './lbs1016.service';

describe('Lbs1016Service', () => {
  let service: Lbs1016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lbs1016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
