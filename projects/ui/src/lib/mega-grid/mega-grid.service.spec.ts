import { TestBed } from '@angular/core/testing';

import { MegaGridService } from './mega-grid.service';

describe('MegaGridService', () => {
  let service: MegaGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MegaGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
