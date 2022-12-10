import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { NavigationComponent } from './components/app/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
