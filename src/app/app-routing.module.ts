import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonDePagoComponent } from './landing/componentes/boton-de-pago/boton-de-pago.component';
import { HomeComponent } from './landing/componentes/home/home.component';

const routes: Routes = [
  { path: 'mercado-pago', component: BotonDePagoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
