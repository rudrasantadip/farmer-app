import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrimeBotsComponent } from './components/prime-bots/prime-bots.component';
import { SubBotsComponent } from './components/sub-bots/sub-bots.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = 
[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'primebots',
    component:PrimeBotsComponent
  }
  ,
  {
    path:'subbots',
    component:SubBotsComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  }
  ,
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
