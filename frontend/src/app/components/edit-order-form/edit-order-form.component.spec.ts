import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { EditOrderFormComponent } from './edit-order-form.component';

describe('EditOrderFormComponent', () => {
  let component: EditOrderFormComponent;
  let fixture: ComponentFixture<EditOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule],
      declarations: [ EditOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return form invalid', () => {
    fixture = TestBed.createComponent(EditOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.orderForm;
    const startDate = component.orderForm.controls['startDate']
    const endDate = component.orderForm.controls['endDate']
    endDate.setValue(new Date('2023-06-06'));
    startDate.setValue('');

    expect(form.invalid).toBeTruthy();
  });

  it('should return form valid', () => {
    fixture = TestBed.createComponent(EditOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.orderForm;
    const startDate = component.orderForm.controls['startDate']
    const endDate = component.orderForm.controls['endDate']
    startDate.setValue(new Date('2023-06-06'));
    endDate.setValue(new Date('2024-06-06'));
    expect(form.valid).toBeTruthy();
  });
});
