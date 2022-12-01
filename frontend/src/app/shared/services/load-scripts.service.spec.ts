import { TestBed } from '@angular/core/testing';

import { LoadScriptsService } from './load-scripts.service';

describe('LoadScriptsService', () => {
  let service: LoadScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
