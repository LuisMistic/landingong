import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonDePagoComponent } from './landing/componentes/boton-de-pago/boton-de-pago.component';
import { HomeComponent } from './landing/componentes/home/home.component';

import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'index', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
