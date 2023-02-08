import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { SupportComponent } from './support/support.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';





const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,data: {title: 'Home'} },
    {path:'service',component:ServiceComponent,data: {title: 'Service'}},
    {path:'support',component:SupportComponent,data: {title: 'Support'}},
    {path:'team',component:TeamComponent,data: {title: 'Team'}},
    {path:'about',component:AboutComponent,data: {title: 'About'}}
 

  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }