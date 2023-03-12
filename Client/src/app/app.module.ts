import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { MakeService } from './services/make.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { NavbarDemoComponent } from './components/demos/navbar-demo/navbar-demo.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarDemoComponent } from './components/demos/sidebar-demo/sidebar-demo.component';
import { IconsModule } from './icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    NavbarComponent,
    SandboxComponent,
    NavbarDemoComponent,
    SidebarComponent,
    SidebarDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IconsModule
  ],
  providers: [
    MakeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
