import { Component } from '@angular/core';
import { environment } from 'src/environments/environment'

declare var MercadoPago: any;

@Component({
  selector: 'app-boton-de-pago',
  templateUrl: './boton-de-pago.component.html',
  styleUrls: ['./boton-de-pago.component.css'],
})
export class BotonDePagoComponent {
  
  productDescription: string = 'Donaciones';
  totalAmount: number = 0;
  beerCount: number = 0;
  amountInput: number = 0;

  constructor() {
    // Inicializar propiedades si es necesario
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

  // PUBLIC-KEY

  mercadopago = new MercadoPago(environment.publicKey, {
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

    fetch(environment.URL + '/create_preference', {
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
