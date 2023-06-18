import { NgModule } from '@angular/core';

// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'

// Componentes
import { HomeComponent } from './landing/componentes/home/home.component';
import { BotonDePagoComponent } from './landing/componentes/boton-de-pago/boton-de-pago.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BotonDePagoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
=======
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
>>>>>>> 4b4ec186c8d6a1f412d81474b123c4adc332d348
  providers: [HTMLElement],
  bootstrap: [AppComponent],
})
export class AppModule {}
