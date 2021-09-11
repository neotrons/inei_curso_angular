import { TestBed } from '@angular/core/testing';

import { UbigeoService } from './ubigeo.service';

describe('UbigeoService', () => {
  let service: UbigeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbigeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
