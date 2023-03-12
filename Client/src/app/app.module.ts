import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { MakeService } from './services/make.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { NavbarDemoComponent } from './demos/navbar-demo/navbar-demo.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { IconsModule } from './shared/icons/icons.module';
import { SidebarDemoComponent } from './demos/sidebar-demo/sidebar-demo.component';

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
