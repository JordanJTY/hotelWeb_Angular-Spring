import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatDialogModule } from '@angular/material/dialog'

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
import { authInterceptorProviders } from './shared/_helpers/auth.interceptor';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AdminHomePageComponent } from './views/admin-home-page/admin-home-page.component';
import { AdminAddApartmentPageComponent } from './views/admin-add-apartment-page/admin-add-apartment-page.component';
import { AdminEditApartmentPageComponent } from './views/admin-edit-apartment-page/admin-edit-apartment-page.component';
import { EditApartmentFormComponent } from './components/edit-apartment-form/edit-apartment-form.component';
import { AddApartmentFormComponent } from './components/add-apartment-form/add-apartment-form.component';
import { AdminReservationsComponent } from './views/admin-reservations/admin-reservations.component';
import { ReservationCardComponent } from './components/reservation-card/reservation-card.component';
import { AdminReservationDataComponent } from './views/admin-reservation-data/admin-reservation-data.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { ApartmentDetailsComponent } from './views/apartment-details/apartment-details.component';
import { OrderPageComponent } from './views/order-page/order-page.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationsPageComponent } from './views/reservations-page/reservations-page.component';

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
    RegisterPageComponent,
    RegisterFormComponent,
    AdminHomePageComponent,
    AdminAddApartmentPageComponent,
    AdminEditApartmentPageComponent,
    EditApartmentFormComponent,
    AddApartmentFormComponent,
    AdminReservationsComponent,
    ReservationCardComponent,
    AdminReservationDataComponent,
    ReservationDetailsComponent,
    ApartmentDetailsComponent,
    OrderPageComponent,
    ReservationFormComponent,
    ReservationsPageComponent,
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
    NgxPermissionsModule.forRoot(),
    MatDialogModule
  ],
  entryComponents: [ApartmentDetailsComponent],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
