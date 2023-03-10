import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IvyCarouselModule } from 'angular-responsive-carousel';



import { RoutingModule } from '../app/app-routing.module';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { SupportComponent } from './support/support.component';
import { TeamComponent } from './team/team.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, RoutingModule ,IvyCarouselModule,
    MatCardModule],
  declarations: [ AppComponent,HeaderComponent,FooterComponent,AboutComponent,ServiceComponent,SupportComponent,TeamComponent],
  bootstrap:    [ AppComponent ]
 
 
})
export class AppModule { }
