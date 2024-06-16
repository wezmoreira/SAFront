import { ICardPrincipal } from '../interfaces/card-principal.interface';

export class CardPrincipal implements ICardPrincipal {
  public id: string;
  public title: string;
  public description: string;
  public imageLarge: string;
  public imageOriginal: string;
  public imagePortrait: string;
  public imageLandscape: string;
  public imageTiny: string;
  public userId: string;
  public date: Date;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.imageLarge = '';
    this.imageOriginal = '';
    this.imagePortrait = '';
    this.imageLandscape = '';
    this.imageTiny = '';
    this.userId = '';
    this.date = new Date();
  }
}
