import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordFormComponent } from './components/recover-password-form/recover-password-form.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AdminAddApartmentPageComponent } from './views/admin-add-apartment-page/admin-add-apartment-page.component';
import { AdminEditApartmentPageComponent } from './views/admin-edit-apartment-page/admin-edit-apartment-page.component';
import { AdminHomePageComponent } from './views/admin-home-page/admin-home-page.component';
import { AdminReservationDataComponent } from './views/admin-reservation-data/admin-reservation-data.component';
import { AdminReservationsComponent } from './views/admin-reservations/admin-reservations.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { HelpPageComponent } from './views/help-page/help-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { InfoPageComponent } from './views/info-page/info-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { RecoverPasswordPageComponent } from './views/recover-password-page/recover-password-page.component';
import { RegisterPageComponent } from './views/register-page/register-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'recover-password', component: RecoverPasswordPageComponent },
  { path: 'admin-home', component: AdminHomePageComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
  }},
  { path: 'add-apartment', component: AdminAddApartmentPageComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
  }},
  { path: 'edit-apartment/:id', component: AdminEditApartmentPageComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
  }},
  { path: 'details-reservation/:id', component: AdminReservationDataComponent, canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
  }},
  // { path: 'reservations', component: RecoverPasswordPageComponent },
  { path: 'allReservations', component: AdminReservationsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard],
  //   data: {
  //     role: 'ROLE_USER'
  // } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
