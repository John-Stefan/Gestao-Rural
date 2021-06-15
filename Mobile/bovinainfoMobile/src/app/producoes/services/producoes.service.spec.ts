import { TestBed } from '@angular/core/testing';

import { ProducoesService } from './producoes.service';

describe('ProducoesService', () => {
  let service: ProducoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
