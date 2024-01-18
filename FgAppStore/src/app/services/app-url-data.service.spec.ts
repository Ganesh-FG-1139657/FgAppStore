import { TestBed } from '@angular/core/testing';

import { AppUrlDataService } from './app-url-data.service';

describe('AppUrlDataService', () => {
  let service: AppUrlDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUrlDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
