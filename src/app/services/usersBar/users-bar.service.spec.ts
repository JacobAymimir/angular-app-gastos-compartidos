import { TestBed } from '@angular/core/testing';

import { UsersBarService } from './users-bar.service';

describe('UsersBarService', () => {
  let service: UsersBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
