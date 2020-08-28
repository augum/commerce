import { TestBed } from '@angular/core/testing';

import { CommandemagService } from './commandemag.service';

describe('CommandemagService', () => {
  let service: CommandemagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandemagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
