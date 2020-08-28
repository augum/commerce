import { TestBed } from '@angular/core/testing';

import { B1016Service } from './b1016.service';

describe('B1016Service', () => {
  let service: B1016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B1016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
