import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { HelperPageComponent } from './helper-page.component';

describe('HelperPageComponent', () => {
  let component: HelperPageComponent;
  let fixture: ComponentFixture<HelperPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, AppRoutingModule, MatCardModule, MatSlideToggleModule, NgxPermissionsModule.forRoot()],
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
