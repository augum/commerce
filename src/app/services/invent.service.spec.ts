import { TestBed } from '@angular/core/testing';

import { InventService } from './invent.service';

describe('InventService', () => {
  let service: InventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
