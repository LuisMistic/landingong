import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonDePagoComponent } from './landing/componentes/boton-de-pago/boton-de-pago.component';
import { SidebarComponent } from './landing/componentes/sidebar/sidebar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'mercado-pago', component: BotonDePagoComponent },
  { path: 'app-root', component: AppComponent },
  { path: 'dashboard', component: SidebarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
