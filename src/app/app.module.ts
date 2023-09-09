
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

import { DonarComponent } from './landing/componentes/donar/donar.component';
import { SidebarComponent } from './landing/componentes/sidebar/sidebar.component';
import { DashboardComponent } from './landing/componentes/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NuestraHistoriaComponent } from './landing/componentes/nuestra-historia/nuestra-historia.component';
import { MisionComponent } from './landing/componentes/somos/mision/mision.component';
import { VisionComponent } from './landing/componentes/somos/vision/vision.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { QuienesSomosComponent } from './landing/componentes/quienes-somos/quienes-somos.component';
import { ScrollToDirective } from './scroll-to.directive';
import { ScrollToService } from './scroll-to.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { ValoresComponent } from './landing/componentes/somos/valores/valores.component';
import { ComisionComponent } from './landing/componentes/somos/comision/comision.component';
import { BotonFlotanteComponent } from './landing/componentes/boton-flotante/boton-flotante.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, BotonDePagoComponent, NavbarComponent, BannerComponent, QuienesSomosComponent, DonarComponent, SidebarComponent, DashboardComponent, NuestraHistoriaComponent, MisionComponent,  VisionComponent, ScrollToDirective, ValoresComponent, ComisionComponent, BotonFlotanteComponent,   
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, FontAwesomeModule, NgxPageScrollModule, MatDialogModule, NgxPageScrollCoreModule],
  providers: [HTMLElement, ScrollToService],
  bootstrap: [AppComponent],
 
})
export class AppModule {}    
