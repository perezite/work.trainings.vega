import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarDemoComponent } from './shared/layout/navbar/demo/navbar-demo.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SidebarDemoComponent } from './shared/layout/sidebar/demo/sidebar-demo.component';

const routes: Routes = [
  { path: 'navbar-demo', component: NavbarDemoComponent, data: { fullscreen: 'true' } },
  { path: 'sidebar-demo', component: SidebarDemoComponent, data: { fullscreen: 'true' } },
  { path: '**', component: SandboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
