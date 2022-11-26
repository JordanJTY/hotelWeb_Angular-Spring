import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'list', component: ListComponent },
  // { path: 'us', component: AboutUsComponent },
  // { path: 'contact', component: ContactComponent},
  // { path: 'login', component: LoginComponent},
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
