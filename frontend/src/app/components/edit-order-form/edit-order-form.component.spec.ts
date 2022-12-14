import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderFormComponent } from './edit-order-form.component';

describe('EditOrderFormComponent', () => {
  let component: EditOrderFormComponent;
  let fixture: ComponentFixture<EditOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
