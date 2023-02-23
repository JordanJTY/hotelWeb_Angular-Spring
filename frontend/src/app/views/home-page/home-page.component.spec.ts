import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomePageComponent } from './home-page.component';
import { SliderComponent } from 'src/app/components/slider/slider.component';
import { ApartmentCardComponent } from 'src/app/components/apartment-card/apartment-card.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule, AppRoutingModule, MatSlideToggleModule,Ng2SearchPipeModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ HomePageComponent, SliderComponent, ApartmentCardComponent, HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
