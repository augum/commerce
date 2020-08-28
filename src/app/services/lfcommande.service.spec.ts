import { TestBed } from '@angular/core/testing';

import { LfcommandeService } from './lfcommande.service';

describe('LfcommandeService', () => {
  let service: LfcommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LfcommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
