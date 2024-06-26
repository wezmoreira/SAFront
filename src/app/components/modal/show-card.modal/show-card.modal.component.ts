import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardPrincipal } from 'src/app/models/card-principal.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { MessageService } from 'src/app/services/util/message.service';

@Component({
  selector: 'app-show-card-modal',
  templateUrl: './show-card.modal.component.html',
  styleUrls: ['./show-card.modal.component.css'],
})
export class ShowCardModalComponent implements OnInit {
  @Input() card: CardPrincipal = new CardPrincipal();

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
      this.validComment();
  }

  validComment() {
    this.form = this.fb.group({
      comment: [
        '',
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.required,
        ]),
      ],
    });
  }

  comment() {
    if (!this.form.valid) {
      console.log('invalido');
      return;
    }

    console.log(this.form.value.comment);
    this.form.reset();
  }

  loadComments(){
    console.log('loadComments');
    this.commentService.getComments().subscribe({
      next: (response: any) => {
        console.log('response', response);
      },
      error: (error: any) => {
        console.log('error', error);
      }
    
    });
  }

  formatAddress() {
    return `${this.card.user.address}, ${this.card.user.number} | ${this.card.user.city} - ${this.card.user.state}  ${this.card.user.cep}`;
  }
}
