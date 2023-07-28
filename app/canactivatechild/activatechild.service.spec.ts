import { TestBed } from '@angular/core/testing';

import { ActivatechildService } from './activatechild.service';

describe('ActivatechildService', () => {
  let service: ActivatechildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatechildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
