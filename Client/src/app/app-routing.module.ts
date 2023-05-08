import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarDemoComponent } from './shared/shell/navbar/demo/navbar-demo.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SidebarDemoComponent } from './shared/shell/sidebar/demo/sidebar-demo.component';
import { CardDemoComponent } from './shared/card/card-demo/card-demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';

const routes: Routes = [
  { path: 'navbar-demo', component: NavbarDemoComponent, data: { fullscreen: 'true' } },
  { path: 'sidebar-demo', component: SidebarDemoComponent, data: { fullscreen: 'true' } },
  { path: 'card-demo', component: CardDemoComponent, data: { fullscreen: 'true' } },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'vehicles/new', component: VehicleFormComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
