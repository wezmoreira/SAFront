import { ICardPrincipal } from '../interfaces/card-principal.interface';
import { CardPrincipal } from './card-principal.model';

export class GenericResult {
  public data: any;
  public message: string;
  public success: boolean;

  constructor() {
    this.data = new CardPrincipal();
    this.message = '';
    this.success = false;
  }
}
