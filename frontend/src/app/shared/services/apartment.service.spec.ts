import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApartmentService } from './apartment.service';

describe('ApartmentService', () => {
  let service: ApartmentService;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule],
    })
    service = TestBed.inject(ApartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
