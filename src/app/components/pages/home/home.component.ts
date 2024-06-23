import { Component, OnInit } from '@angular/core';
import { CardPrincipal } from 'src/app/models/card-principal.model';
import { GenericResult } from 'src/app/models/generic-result.model';
import { UserModel } from 'src/app/models/user/user.model';
import { CardService } from 'src/app/services/card/card.service';
import { UserService } from 'src/app/services/user/user.service';
import { MessageService } from 'src/app/services/util/message.service';
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
  public currentCardId: string = '';
  public cardUserActualId: string = '';  // TODO - remover

  public city: string = '';
  public address: string = '';
  public cep: string = '';
  public number: string = '';
  public state: string = '';

  colors = ['6eadab', 'a2ad6e', '6e89ad', '6e70ad', '8b6ead', 'adab6e', 'ad6ea2', '868561'];


  constructor(
    private cardService: CardService,
    private userService: UserService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.loadCards();
  }

  public showCommentsOnClick(): void {
    this.showComments = true;
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  loadCards() {
    this.cardService.getCards().subscribe({
      next: (response: GenericResult) => {
        if (Array.isArray(response.data)) {
          console.log('response.data', response.data)
          this.cardPrincipal = response.data;
        } else {
          this.cardPrincipal.push(response.data);
        }
      },
      error: (err) => {
        this.messageService.alert('Sem cards no momento!', 'warning', 'bottom-center', 5000, 'notification-group-1');
      },
    });
  }

  // showCardDetails(
  //   title: string,
  //   description: string,
  //   imagePortrait: string,
  //   cardId: string,
  //   userId: string,
  //   city: string,
  //   address: string,
  //   number: string,
  //   cep: string,
  // ): void {
  //   this.userInformation(userId);
  //   this.currentTitle = title;
  //   this.currentDescription = description;
  //   this.currentImagePortrait = imagePortrait;
  //   this.currentCardId = cardId;
  //   this.cardUserActualId = userId;
  //   this.city = city;
  //   this.address = address;
  //   this.number = number;
  //   this.cep = cep;
  // }


  public actualCard: CardPrincipal = new CardPrincipal();
  showCardDetails(cardActual: CardPrincipal){
    this.actualCard = cardActual;
  }

  teste(){
    console.log('chamando teste');

    UIkit.modal.prompt('Name:', 'Your name').then((name: any) => {
      console.log('Prompted:', name);
    });
  }

  // public user!: UserModel;


  // // userInformation(userId: string) {
  // //   this.userService.getUserById(userId).subscribe({
  // //     next: (response) => {
  // //       console.log('response', response);
  // //       this.user = response.data;
  // //       console.log('user', this.user);
  // //     }, 
  // //     error: (err) => {
  // //       console.log('error', err) 
  // //     }});
  // // }
  
}
