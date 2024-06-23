import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardPrincipal } from 'src/app/models/card-principal.model';
import { UserModel } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-show-card-modal',
  templateUrl: './show-card.modal.component.html',
  styleUrls: ['./show-card.modal.component.css'],
})
export class ShowCardModalComponent implements OnInit, AfterViewInit {
  @Input() public comments: boolean = false;
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public imagePortrait: string = '';
  @Input() public city: string = '';
  @Input() public address: string = '';
  @Input() public cep: string = '';
  @Input() public number: string = '';
  @Input() public cardUserId: string = '';

  @Input() public user!: UserModel;

  @Input() card: CardPrincipal = new CardPrincipal();

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {}

  ngAfterViewInit(): void {
    console.log('comments', this.cardUserId);
    console.log('comments', this.description);
  }

  ngOnInit(): void {
    this.validComment();

    // this.userInformation();
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

  userInformation() {
    this.userService.getUserById(this.cardUserId).subscribe({
      next: (response) => {
        console.log('response', response);
        this.user = response.data;
        console.log('user', this.user);
      },
      error: (err) => {},
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

  formatAddress() {
    return `${this.card.user.address}, ${this.card.user.number} | ${this.card.user.city} - ${this.card.user.state}  ${this.card.user.cep}`;
  }
}
