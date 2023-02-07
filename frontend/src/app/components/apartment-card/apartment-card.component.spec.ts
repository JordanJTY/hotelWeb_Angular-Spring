import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentCardComponent } from './apartment-card.component';
import { NgxPermissionsModule } from 'ngx-permissions';

describe('ApartmentCardComponent', () => {
  let component: ApartmentCardComponent;
  let fixture: ComponentFixture<ApartmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgxPermissionsModule.forRoot(), HttpClientModule],
      declarations: [ ApartmentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
