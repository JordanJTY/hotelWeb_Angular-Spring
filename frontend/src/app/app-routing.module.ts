import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoverPasswordFormComponent } from './components/recover-password-form/recover-password-form.component';
import { AuthGuard } from './shared/guard/auth.guard';
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
