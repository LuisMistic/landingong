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

@NgModule({
  declarations: [AppComponent, HomeComponent, BotonDePagoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [HTMLElement],
  bootstrap: [AppComponent],
})
export class AppModule {}
