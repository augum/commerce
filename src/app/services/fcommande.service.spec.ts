import { TestBed } from '@angular/core/testing';

import { FcommandeService } from './fcommande.service';

describe('FcommandeService', () => {
  let service: FcommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FcommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
