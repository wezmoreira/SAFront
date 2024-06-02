import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { CardPrincipal } from 'src/app/models/card-principal.model';
import { GenericResult } from 'src/app/models/generic-result.model';
import { CardService } from 'src/app/services/card/card.service';
import { UserService } from 'src/app/services/user/user.service';
import UIkit from 'uikit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cardPrincipal: CardPrincipal[] = [];
  public showComments: boolean = false;
  public currentTitle: string = '';
  public currentDescription: string = '';
  public currentImagePortrait: string = '';

  public city: string = '';
  public address: string = '';
  public cep: string = '';
  public number: string = '';

  constructor(
    private cardService: CardService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.loadCards();
  }

  public showCommentsOnClick(): void {
    this.showComments = true;
  }

  loadCards() {
    this.cardService.getCards().subscribe({
      next: (response: GenericResult) => {
        if (Array.isArray(response.data)) {
          this.cardPrincipal = response.data;
        } else {
          this.cardPrincipal.push(response.data);
        }
      },
      error: (err) => {
        UIkit.notification('Sem cards no momento!', {
          pos: 'bottom-right',
          status: 'warning',
          timeout: 5000,
          group: 'notification-group-1',
        });
      },
    });
  }

  showCardDetails(
    title: string,
    description: string,
    imagePortrait: string,
  ): void {
    this.getUser();
    this.currentTitle = title;
    this.currentDescription = description;
    this.currentImagePortrait = imagePortrait;
  }

  getUser() {
    this.userService.getUser().subscribe({
      next: (response: any) => {
        //arrumar pra pegar o usuario certo
        this.city = response.data.city;
        this.address = response.data.address;
        this.cep = response.data.cep;
        this.number = response.data.number;
      },
      error: (err) => {
        UIkit.notification('Erro ao carregar o usuário!', {
          pos: 'bottom-right',
          status: 'danger',
          timeout: 5000,
          group: 'notification-group-1',
        });
      },
    });
  }
}
