import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpPageComponent } from './views/help-page/help-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { InfoPageComponent } from './views/info-page/info-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'info', component: InfoPageComponent},
  // { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }