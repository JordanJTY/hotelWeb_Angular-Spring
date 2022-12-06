import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApartmentCardComponent } from './components/apartment-card/apartment-card.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { HelpPageComponent } from './views/help-page/help-page.component';
import { HelpCardComponent } from './components/help-card/help-card.component';
import { InfoPageComponent } from './views/info-page/info-page.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RecoverPasswordPageComponent } from './views/recover-password-page/recover-password-page.component';
import { RecoverPasswordFormComponent } from './components/recover-password-form/recover-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApartmentCardComponent,
    HomePageComponent,
    SliderComponent,
    HelpPageComponent,
    HelpCardComponent,
    InfoPageComponent,
    ContactPageComponent,
    ContactFormComponent,
    LoginPageComponent,
    LoginFormComponent,
    RecoverPasswordPageComponent,
    RecoverPasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
