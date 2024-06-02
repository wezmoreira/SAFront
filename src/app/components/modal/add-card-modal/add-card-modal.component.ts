import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageType } from '../../enums/message-type.enums';
import { NewCard } from 'src/app/models/card/new-card.model';
import { CardUtils } from 'src/app/services/card/card-utils.service';
import { CardService } from 'src/app/services/card/card.service';
import UIkit from 'uikit';

@Component({
  selector: 'app-add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.css']
})
export class AddCardModalComponent {
  public form: FormGroup;
  public newCard!: NewCard;

  constructor(private fb: FormBuilder,private cardUtils: CardUtils, private cardService: CardService){
    this.form = this.fb.group({
      titulo: [
        '', Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.required
        ])
      ],
      descricao: [
        '', Validators.compose([
          Validators.minLength(10),
          Validators.maxLength(150),
          Validators.required
        ])
      ],
    })
  }

  async save(){
    try {
      this.newCard = await this.cardUtils.createNewCard(this.form);
  
      console.log('newCard ', this.newCard);
  
      this.cardService.addCard(this.newCard).subscribe({
        next: (response: any) => {
          console.log('result ', response)
          UIkit.notification("Card Adicionado com sucesso!", {pos: 'bottom-right'})
          location.reload();
        },
        error: (err) => {
          UIkit.notification("Erro ao adicionar o card!", {pos: 'bottom-right', status: 'danger', timeout: 5000, group: 'notification-group-1'})
        }
      });
    } catch (err) {
      console.log('Erro ao criar o novo cartão:', err);
    }
  }
}