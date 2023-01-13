import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { RoutingModule } from '../app/app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, RoutingModule ],
  declarations: [ AppComponent,HeaderComponent,FooterComponent],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
