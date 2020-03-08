import { TestBed } from '@angular/core/testing';

import { UserCompareService } from './user-compare.service';

describe('UserCompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCompareService = TestBed.get(UserCompareService);
    expect(service).toBeTruthy();
  });
});
