import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/shell/navbar/navbar.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { NavbarDemoComponent } from './shared/shell/navbar/demo/navbar-demo.component';
import { SidebarComponent } from './shared/shell/sidebar/sidebar.component';
import { IconsModule } from './shared/icons/icons.module';
import { SidebarDemoComponent } from './shared/shell/sidebar/demo/sidebar-demo.component';
import { AppComponent } from './app.component';
import { ShellComponent } from './shared/shell/shell.component';
import { CardComponent } from './shared/card/card.component';
import { CardDemoComponent } from './shared/card/card-demo/card-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { MakeService } from './services/make.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SandboxComponent,
    NavbarDemoComponent,
    SidebarComponent,
    SidebarDemoComponent,
    ShellComponent,
    CardComponent,
    CardDemoComponent,
    DashboardComponent,
    VehicleFormComponent
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
