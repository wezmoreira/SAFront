import { Component, OnInit } from '@angular/core';
import { CardPrincipal } from 'src/app/models/card-principal.model';
import { GenericResult } from 'src/app/models/generic-result.model';
import { CardService } from 'src/app/services/card/card.service';
import { MessageService } from 'src/app/services/util/message.service';
import UIkit from 'uikit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cardPrincipal: CardPrincipal[] = [];
  public actualCard: CardPrincipal = new CardPrincipal();

  colors = [
    '6eadab',
    'a2ad6e',
    '6e89ad',
    '6e70ad',
    '8b6ead',
    'adab6e',
    'ad6ea2',
    '868561',
  ];

  constructor(
    private cardService: CardService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.loadCards();
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  loadCards() {
    this.cardService.getCards().subscribe({
      next: (response: GenericResult) => {
        if (Array.isArray(response.data)) {
          console.log('response.data', response.data);
          this.cardPrincipal = response.data;
        } else {
          this.cardPrincipal.push(response.data);
        }
      },
      error: (err) => {
        this.messageService.alert(
          'Sem cards no momento!',
          'warning',
          'bottom-center',
          5000,
          'notification-group-1',
        );
      },
    });
  }

  showCardDetails(cardActual: CardPrincipal) {
    this.actualCard = cardActual;
  }
}
