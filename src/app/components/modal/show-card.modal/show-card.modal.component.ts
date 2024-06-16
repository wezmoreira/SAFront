import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'show-card-modal',
  templateUrl: './show-card.modal.component.html',
  styleUrls: ['./show-card.modal.component.css'],
})
export class ShowCardModalComponent implements OnChanges, OnInit {
  @Input() public comments: boolean = false;
  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public imagePortrait: string = '';
  @Input() public city: string = '';
  @Input() public address: string = '';
  @Input() public cep: string = '';
  @Input() public number: string = '';

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validComment();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('comments' in changes) {
      this.comments = changes['comments'].currentValue;
    }
  }

  validComment(){
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

  comment(){
    if(!this.form.valid){
      console.log("invalido");
      return;
    }
    
    console.log(this.form.value.comment)
    this.form.reset();
  }
}
