import { Component, OnInit, AfterViewInit } from '@angular/core';
import { skip } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';
import SmoothScroll from 'smooth-scroll';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, AfterViewInit {

  shouldAppear = false;
  shouldDisappear = false;
  botonAparecer = false;
  botonDesaparecer = false;
  colorFondoAparecer = false;
  colorFondoDesparecer = false;
  show: boolean = false;
  element: any;
  scroll: any;
  showTransition: boolean = false;
  mostrarAnimacionCierre: boolean = false;
  mostrarAnimacionInicial: boolean = true;
  mostrarNavbar = false;
  images: ImageData[] = [];
  fullscreenIndex: number | null = null;

  constructor(private sharedServiceService: SharedServiceService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.mostrarNavbarConAnimacion();
    }, 0);

    this.sharedServiceService.obtenerNotificacionCierre().pipe(skip(1)).subscribe(cierre => {
      this.mostrarAnimacionCierre = cierre;
    });

    this.sharedServiceService.obtenerNotificacionAnimacionInicial().pipe(skip(1)).subscribe(animacion => {
      this.mostrarAnimacionInicial = animacion;
    });

    // Inicializar la galería con 20 imágenes de ejemplo
    this.images = [
      { id: 1, src: '../../../../assets/quienesSomos/nosotros.JPG', alt: 'Imagen 1' },
      { id: 2, src: 'https://via.placeholder.com/300/33FF57/ffffff?text=Imagen+2', alt: 'Imagen 2' },
      { id: 3, src: 'https://via.placeholder.com/300/3357FF/ffffff?text=Imagen+3', alt: 'Imagen 3' },
      { id: 4, src: 'https://via.placeholder.com/300/57FF33/ffffff?text=Imagen+4', alt: 'Imagen 4' },
      { id: 5, src: 'https://via.placeholder.com/300/5733FF/ffffff?text=Imagen+5', alt: 'Imagen 5' },
      { id: 6, src: 'https://via.placeholder.com/300/FF33A1/ffffff?text=Imagen+6', alt: 'Imagen 6' },
      { id: 7, src: '../../../../assets/quienesSomos/nosotros.JPG', alt: 'Imagen 7' },
      { id: 8, src: 'https://via.placeholder.com/300/A133FF/ffffff?text=Imagen+8', alt: 'Imagen 8' },
      { id: 9, src: 'https://via.placeholder.com/300/FF5733/ffffff?text=Imagen+9', alt: 'Imagen 9' },
      { id: 10, src: 'https://via.placeholder.com/300/33FF57/ffffff?text=Imagen+10', alt: 'Imagen 10' },
      { id: 11, src: 'https://via.placeholder.com/300/3357FF/ffffff?text=Imagen+11', alt: 'Imagen 11' },
      { id: 12, src: 'https://via.placeholder.com/300/57FF33/ffffff?text=Imagen+12', alt: 'Imagen 12' },
      { id: 13, src: 'https://via.placeholder.com/300/5733FF/ffffff?text=Imagen+13', alt: 'Imagen 13' },
      { id: 14, src: 'https://via.placeholder.com/300/FF33A1/ffffff?text=Imagen+14', alt: 'Imagen 14' },
      { id: 15, src: 'https://via.placeholder.com/300/33FFA1/ffffff?text=Imagen+15', alt: 'Imagen 15' },
      { id: 16, src: 'https://via.placeholder.com/300/A133FF/ffffff?text=Imagen+16', alt: 'Imagen 16' },
      { id: 17, src: 'https://via.placeholder.com/300/FF5733/ffffff?text=Imagen+17', alt: 'Imagen 17' },
      { id: 18, src: 'https://via.placeholder.com/300/33FF57/ffffff?text=Imagen+18', alt: 'Imagen 18' },
      { id: 19, src: 'https://via.placeholder.com/300/3357FF/ffffff?text=Imagen+19', alt: 'Imagen 19' },
      { id: 20, src: 'https://via.placeholder.com/300/57FF33/ffffff?text=Imagen+20', alt: 'Imagen 20' }
    ];
  }

  ngAfterViewInit(): void {
    this.scroll = new SmoothScroll('a[href*="#"]', {
      // Configuración de SmoothScroll si es necesario
    });
  }

  mostrarNavbarConAnimacion() {
    this.mostrarNavbar = true;
    console.log('mostrarNavbar se estableció en true');
  }

  openImage(index: number): void {
    this.fullscreenIndex = index;
  }

  closeImage(): void {
    this.fullscreenIndex = null;
  }

  prevImage(): void {
    if (this.fullscreenIndex !== null) {
      this.fullscreenIndex = (this.fullscreenIndex > 0) ? this.fullscreenIndex - 1 : this.images.length - 1;
    }
  }

  nextImage(): void {
    if (this.fullscreenIndex !== null) {
      this.fullscreenIndex = (this.fullscreenIndex < this.images.length - 1) ? this.fullscreenIndex + 1 : 0;
    }
  }
}
