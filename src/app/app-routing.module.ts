import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonDePagoComponent } from './landing/componentes/boton-de-pago/boton-de-pago.component';
import { HomeComponent } from './landing/componentes/home/home.component';

<<<<<<< HEAD
const routes: Routes = [
  { path: 'mercado-pago', component: BotonDePagoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
=======
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'index', component: AppComponent }
>>>>>>> 4b4ec186c8d6a1f412d81474b123c4adc332d348
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
