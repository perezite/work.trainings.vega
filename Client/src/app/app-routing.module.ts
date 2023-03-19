import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarDemoComponent } from './shared/shell/navbar/demo/navbar-demo.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SidebarDemoComponent } from './shared/shell/sidebar/demo/sidebar-demo.component';
import { VehicleFormComponent } from './vehicles/vehicle-form.component';

const routes: Routes = [
  { path: 'navbar-demo', component: NavbarDemoComponent, data: { fullscreen: 'true' } },
  { path: 'sidebar-demo', component: SidebarDemoComponent, data: { fullscreen: 'true' } },
  { path: 'new-vehicle', component: VehicleFormComponent, data: { fullscreen: 'false' } },
  { path: '**', component: SandboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
