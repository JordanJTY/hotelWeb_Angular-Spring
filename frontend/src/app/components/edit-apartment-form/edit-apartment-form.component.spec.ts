import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditApartmentFormComponent } from './edit-apartment-form.component';

describe('EditApartmentFormComponent', () => {
  let component: EditApartmentFormComponent;
  let fixture: ComponentFixture<EditApartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditApartmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditApartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
