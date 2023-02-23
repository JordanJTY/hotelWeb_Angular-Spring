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
});
