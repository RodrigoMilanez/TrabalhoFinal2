import { TestBed } from '@angular/core/testing';

import { GravadoraService } from './gravadora.service';

describe('GravadoraService', () => {
  let service: GravadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GravadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
