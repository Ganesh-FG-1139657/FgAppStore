import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FgAppListComponent } from './fg-app-list.component';
import { FgAppListRoutingModule } from './fg-app-list-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import MatProgressSpinnerModule


@NgModule({
  declarations: [
    FgAppListComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FgAppListRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class FgAppListModule { }
