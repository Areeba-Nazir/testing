import { TestBed } from '@angular/core/testing';

import { WebAPIsService } from './web-apis.service';

describe('WebAPIsService', () => {
  let service: WebAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
