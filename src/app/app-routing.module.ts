import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';

const routes: Routes = [
  {path : '', component : LandingComponent, pathMatch: 'full'},
  {path : 'tendencias', component : TendenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
