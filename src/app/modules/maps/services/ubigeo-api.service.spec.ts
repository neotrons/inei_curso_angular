import { TestBed } from '@angular/core/testing';

import { UbigeoApiService } from './ubigeo-api.service';

describe('UbigeoApiService', () => {
  let service: UbigeoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbigeoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
