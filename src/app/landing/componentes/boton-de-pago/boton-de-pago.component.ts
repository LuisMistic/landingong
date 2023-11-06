import { Component } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { Subject, skip, takeUntil } from 'rxjs';
declare var MercadoPago: any;

@Component({
  selector: 'app-boton-de-pago',
  templateUrl: './boton-de-pago.component.html',
  styleUrls: ['./boton-de-pago.component.css'],
})
export class BotonDePagoComponent {
  // URL= 'https://able-charming-garnet.glitch.me';
  URL = 'http://localhost:8080';

  productDescription: string = 'Donaciones';
  totalAmount: number = 0;
  beerCount: number = 0;
  amountInput: number = 0;

  mostrarAnimacionCierre: boolean = false;
  mostrarAnimacionInicial: boolean = true;

  constructor(private sharedServiceService: SharedServiceService ) {
    // Inicializar propiedades si es necesario
  }
  ngOnInit() {
  {
    // Suscribirse al objeto componenteCierreSubject del servicio usando skip(1)
    this.sharedServiceService.obtenerNotificacionCierre().pipe(skip(1)).subscribe(cierre => {
      // Cambiar el valor de la variable mostrarAnimacionCierre según el valor emitido
      this.mostrarAnimacionCierre = cierre;
    });
    // Suscribirse también al objeto animacionInicialSubject del servicio usando skip(1)
    this.sharedServiceService.obtenerNotificacionAnimacionInicial().pipe(skip(1)).subscribe(animacion => {
      // Cambiar el valor de la variable mostrarAnimacionInicial según el valor emitido
      this.mostrarAnimacionInicial = animacion;
    });
  }}
  mostrarNavbarConAnimacion() {
    throw new Error('Method not implemented.');
  }
  updateTotalAmount() {
    if (this.amountInput) {
      this.totalAmount = this.amountInput;
    } else {
      this.totalAmount = this.beerCount * 50;
    }
  }

  updateAmountInput() {
    this.amountInput = this.beerCount * 50;
  }

  updateBeerCount() {
    this.beerCount = this.amountInput;
    this.updateTotalAmount();
  }

  beer3ButtonClicked() {
    this.amountInput = 3;
    this.beerCount = 3;
    this.updateTotalAmount();
    this.updateAmountInput();
  }

  beer5ButtonClicked() {
    this.amountInput = 5;
    this.beerCount = 5;
    this.updateTotalAmount();
    this.updateAmountInput();
  }

  beer10ButtonClicked() {
    this.amountInput = 10;
    this.beerCount = 10;
    this.updateTotalAmount();
    this.updateAmountInput();
  }

  getTotalAmount(): number {
    this.updateTotalAmount();
    return this.totalAmount;
  }

  // Mercado Pago

  mercadopago = new MercadoPago("APP_USR-83f34a8d-ebfe-46e8-b9b8-c4e9f1656299", {
    // PUBLIC-KEY
    locale: 'es-AR', // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  });

  createCheckoutButton(preferenceId: string) {
    const bricksBuilder = this.mercadopago.bricks();

    const renderComponent = async (bricksBuilder: any) => {
      if (window.checkoutButton) window.checkoutButton.unmount();

      await bricksBuilder.create(
        'wallet',
        'button-checkout', // class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error: any) => console.error(error),
            onReady: () => {},
          },
        }
      );
    };

    window.checkoutButton = renderComponent(bricksBuilder);
  }

  checkoutButtonClicked() {
    const orderData = {
      quantity: 1,
      description: this.productDescription,
      price: this.totalAmount.toString(),
    };

    fetch(this.URL + "https://able-charming-garnet.glitch.me/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((preference) => {
        this.createCheckoutButton(preference.id);
      })
      .catch(() => {
        alert('Unexpected error');
      });
  }
}
