import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarDemoComponent } from './components/demos/navbar-demo/navbar-demo.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

const routes: Routes = [
  { path: 'navbar-demo', component: NavbarDemoComponent, data: { fullscreen: 'true' } },
  { path: '**', component: SandboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
