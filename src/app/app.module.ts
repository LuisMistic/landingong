
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
import { Pres1Component } from './landing/componentes/presentaciones/pres1/pres1.component';
import { ImgQuienesComponent } from './landing/componentes/imagenes/img-quienes/img-quienes.component';
import { ModalImgService } from './landing/modal-img.service';
import { LogoComponent } from './landing/componentes/logo/logo.component';
import { LibroComponent } from './landing/componentes/libro/libro.component';
import { Pres2Component } from './landing/componentes/presentaciones/pres2/pres2.component';
import { FundacionComponent } from './landing/componentes/nuestra-historia/fundacion/fundacion.component';
import { BotonFlotanteHistoriaComponent } from './landing/componentes/boton-flotante-historia/boton-flotante-historia.component';
import { ObjetivosComponent } from './landing/componentes/somos/objetivos/objetivos.component';
import { BotonFlotanteObjetivosComponent } from './landing/componentes/boton-flotante-objetivos/boton-flotante-objetivos.component';
import { FamiliaComponent } from './landing/componentes/somos/objetivos/familia/familia.component';
import { ParticiparComponent } from './landing/componentes/somos/objetivos/participar/participar.component';
import { TrabajoComponent } from './landing/componentes/somos/trabajo/trabajo.component';
import { OdontologiaComponent } from './landing/componentes/somos/trabajo/odontologia/odontologia.component';
import { BotonFlotanteTrabajoComponent } from './landing/componentes/boton-flotante-trabajo/boton-flotante-trabajo.component';
import { LogotarnsitionComponent} from './landing/componentes/libro/logotarnsition/logoCierraFinal';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LogoInicialComponent } from './landing/componentes/libro/logo-inicial/logo-inicial.component';
import { ActividadComponent } from './landing/componentes/en accion/actividad/actividad.component';
import { VoluntariadoComponent } from './landing/componentes/en accion/voluntariado/voluntariado.component';
import { BotonFlotanteEnAccionComponent } from './landing/componentes/en accion/boton-flotante-en-accion/boton-flotante-en-accion.component';
import { ContactoComponent } from './landing/componentes/contacto/contacto.component';
import { BotonDeContactoComponent } from './landing/componentes/boton-de-contacto/boton-de-contacto.component';
import { SustentoComponent } from './landing/componentes/en accion/sustento/sustento.component';
import { AyudaComponent } from './landing/componentes/ayudanos/ayuda/ayuda.component';
import { BotonDeAyudaComponent } from './landing/componentes/ayudanos/boton-de-ayuda/boton-de-ayuda.component';
import { SociosComponent } from './landing/componentes/ayudanos/socios/socios.component';
import { InsumosComponent } from './landing/componentes/ayudanos/insumos/insumos.component';
import { AnuncioComponent } from './landing/componentes/anuncio/anuncio.component';
import { GaleriaComponent } from './landing/componentes/galeria/galeria.component';




@NgModule({
  declarations: [AppComponent, HomeComponent, BotonDePagoComponent, NavbarComponent, BannerComponent, QuienesSomosComponent, DonarComponent, SidebarComponent, DashboardComponent, NuestraHistoriaComponent, MisionComponent,  VisionComponent, ScrollToDirective, ValoresComponent, ComisionComponent, BotonFlotanteComponent, Pres1Component, ImgQuienesComponent, LogoComponent, LibroComponent, Pres2Component, FundacionComponent, BotonFlotanteHistoriaComponent, ObjetivosComponent, BotonFlotanteObjetivosComponent, FamiliaComponent, ParticiparComponent, TrabajoComponent, OdontologiaComponent, BotonFlotanteTrabajoComponent, LogotarnsitionComponent, LogoInicialComponent, ActividadComponent, VoluntariadoComponent, BotonFlotanteEnAccionComponent, ContactoComponent, BotonDeContactoComponent, SustentoComponent, AyudaComponent, BotonDeAyudaComponent, SociosComponent, InsumosComponent, AnuncioComponent, GaleriaComponent,    
   ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, FontAwesomeModule, NgxPageScrollModule, MatDialogModule, NgxPageScrollCoreModule, NoopAnimationsModule,],
  providers: [HTMLElement, ScrollToService, ModalImgService],
  bootstrap: [AppComponent],
 
})
export class AppModule {}    
