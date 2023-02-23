import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperPageComponent } from './helper-page.component';

describe('HelperPageComponent', () => {
  let component: HelperPageComponent;
  let fixture: ComponentFixture<HelperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelperPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
