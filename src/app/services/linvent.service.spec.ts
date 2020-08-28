import { TestBed } from '@angular/core/testing';

import { LinventService } from './linvent.service';

describe('LinventService', () => {
  let service: LinventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
