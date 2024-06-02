import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'show-card-modal',
  templateUrl: './show-card.modal.component.html',
  styleUrls: ['./show-card.modal.component.css'],
})
export class ShowCardModalComponent implements OnChanges {
  @Input()
  public comments: boolean = false;

  @Input() public title: string = '';
  @Input() public description: string = '';
  @Input() public imagePortrait: string = '';
  @Input() public city: string = '';
  @Input() public address: string = '';
  @Input() public cep: string = '';
  @Input() public number: string = '';

  constructor() {
    // console.log('sendo chamado ', this.city)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('comments' in changes) {
      this.comments = changes['comments'].currentValue;
    }
  }
}
