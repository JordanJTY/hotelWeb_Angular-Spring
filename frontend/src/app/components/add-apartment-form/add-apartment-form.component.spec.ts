import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApartmentFormComponent } from './add-apartment-form.component';

describe('AddApartmentFormComponent', () => {
  let component: AddApartmentFormComponent;
  let fixture: ComponentFixture<AddApartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApartmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
