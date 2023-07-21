import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  currentComponent: string = 'default'; // Puedes establecer un componente predeterminado
  constructor() { }
}
