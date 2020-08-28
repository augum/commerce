import { TestBed } from '@angular/core/testing';

import { Lb1016Service } from './lb1016.service';

describe('Lb1016Service', () => {
  let service: Lb1016Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lb1016Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
