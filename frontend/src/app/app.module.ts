import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ApartmentCardComponent } from './components/apartment-card/apartment-card.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './components/slider/slider.component';
import { HelpPageComponent } from './views/help-page/help-page.component';
import { HelpCardComponent } from './components/help-card/help-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApartmentCardComponent,
    HomePageComponent,
    SliderComponent,
    HelpPageComponent,
    HelpCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
