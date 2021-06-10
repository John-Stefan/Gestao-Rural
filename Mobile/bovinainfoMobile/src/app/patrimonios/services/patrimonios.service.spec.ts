import { TestBed } from '@angular/core/testing';

import { PatrimoniosService } from './patrimonios.service';

describe('PatrimoniosService', () => {
  let service: PatrimoniosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrimoniosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
