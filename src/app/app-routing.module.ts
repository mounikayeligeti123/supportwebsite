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
    { path: 'home', component: HomeComponent },
    {path:'service',component:ServiceComponent},
    {path:'support',component:SupportComponent},
    {path:'team',component:TeamComponent},
    {path:'about',component:AboutComponent}
 

  
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