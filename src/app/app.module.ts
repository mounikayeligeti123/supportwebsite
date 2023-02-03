import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { RoutingModule } from '../app/app-routing.module';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { SupportComponent } from './support/support.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, RoutingModule ],
  declarations: [ AppComponent,HeaderComponent,FooterComponent,AboutComponent,ServiceComponent,SupportComponent,TeamComponent],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
