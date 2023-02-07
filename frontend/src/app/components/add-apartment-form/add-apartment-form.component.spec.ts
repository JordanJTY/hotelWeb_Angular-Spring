import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddApartmentFormComponent } from './add-apartment-form.component';

describe('AddApartmentFormComponent', () => {
  let component: AddApartmentFormComponent;
  let fixture: ComponentFixture<AddApartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [ AddApartmentFormComponent, ],
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
