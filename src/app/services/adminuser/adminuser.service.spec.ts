import { TestBed } from '@angular/core/testing';

import { AdminuserService } from './adminuser.service';

describe('AdminuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminuserService = TestBed.get(AdminuserService);
    expect(service).toBeTruthy();
  });
});
