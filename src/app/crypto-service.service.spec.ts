import { TestBed } from '@angular/core/testing';

import { CryptoService } from './crypto-service.service';

describe('CryptoServiceService', () => {
  let service: CryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
