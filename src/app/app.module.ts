import { NgModule } from '@angular/core';

// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'

// Componentes

import { HomeComponent } from './landing/componentes/home/home.component';
import { BotonDePagoComponent } from './landing/componentes/boton-de-pago/boton-de-pago.component';
import { NavbarComponent } from './landing/componentes/navbar/navbar.component';
import { BannerComponent } from './landing/componentes/banner/banner.component';
import { QuienesSomosComponent } from './landing/componentes/quienes-somos/quienes-somos.component';
import { DonarComponent } from './landing/componentes/donar/donar.component';
import { SidebarComponent } from './landing/componentes/sidebar/sidebar.component';
import { DashboardComponent } from './landing/componentes/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BotonDePagoComponent, NavbarComponent, BannerComponent, QuienesSomosComponent, DonarComponent, SidebarComponent, DashboardComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [HTMLElement],
  bootstrap: [AppComponent],
})
export class AppModule {}
