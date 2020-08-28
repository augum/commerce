import { TestBed } from '@angular/core/testing';

import { ConssonedeService } from './conssonede.service';

describe('ConssonedeService', () => {
  let service: ConssonedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConssonedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
