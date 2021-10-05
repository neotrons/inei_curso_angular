import { TestBed } from '@angular/core/testing';

import { StorageAuthService } from './storage-auth.service';

describe('StorageAuthService', () => {
  let service: StorageAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
