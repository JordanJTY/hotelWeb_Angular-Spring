import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditApartmentFormComponent } from './edit-apartment-form.component';


describe('EditApartmentFormComponent', () => {
  let component: EditApartmentFormComponent;
  let fixture: ComponentFixture<EditApartmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule],
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
