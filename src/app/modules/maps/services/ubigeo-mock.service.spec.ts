import { TestBed } from '@angular/core/testing';

import { UbigeoMockService } from './ubigeo-mock.service';

describe('UbigeoMockService', () => {
  let service: UbigeoMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbigeoMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
