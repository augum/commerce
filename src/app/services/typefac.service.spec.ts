import { TestBed } from '@angular/core/testing';

import { TypefacService } from './typefac.service';

describe('TypefacService', () => {
  let service: TypefacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypefacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
