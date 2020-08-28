import { TestBed } from '@angular/core/testing';

import { LcommandemagService } from './lcommandemag.service';

describe('LcommandemagService', () => {
  let service: LcommandemagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcommandemagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
