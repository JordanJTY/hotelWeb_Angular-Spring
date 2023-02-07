import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RecoverPasswordPageComponent } from './recover-password-page.component';
import { RecoverPasswordFormComponent } from 'src/app/components/recover-password-form/recover-password-form.component';

describe('RecoverPasswordPageComponent', () => {
  let component: RecoverPasswordPageComponent;
  let fixture: ComponentFixture<RecoverPasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, AppRoutingModule, MatSlideToggleModule, NgxPermissionsModule.forRoot(), FormsModule, ReactiveFormsModule],
      declarations: [ RecoverPasswordPageComponent, RecoverPasswordFormComponent, HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
