import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendenciasComponent } from './tendencias/tendencias.component';

const routes: Routes = [
  {path : 'tendencias', component : TendenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
