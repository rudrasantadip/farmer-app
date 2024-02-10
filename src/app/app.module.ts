import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BodyComponent } from './components/body/body.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrimeBotsComponent } from './components/prime-bots/prime-bots.component';
import { SubBotsComponent } from './components/sub-bots/sub-bots.component';
import { SettingsComponent } from './components/settings/settings.component'
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataTablesModule } from 'angular-datatables';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavigationComponent,
    DashboardComponent,
    PrimeBotsComponent,
    SubBotsComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
