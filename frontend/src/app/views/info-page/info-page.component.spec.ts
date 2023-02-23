import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InfoPageComponent } from './info-page.component';

describe('InfoPageComponent', () => {
  let component: InfoPageComponent;
  let fixture: ComponentFixture<InfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, AppRoutingModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ InfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
