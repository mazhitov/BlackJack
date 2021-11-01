import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() rank = '';
  @Input() suit = '';

  getSymbol() {
    switch (this.suit) {
      case 'diams':
        return '♦'
        break;
      case 'hearts':
        return '♥';
        break;
      case 'clubs':
        return '♣';
        break;
      case 'spades':
        return '♠';
        break;
      default:
        console.log('there is no symbol');
    }
  }
  getClassName() {
    return `card rank-${this.rank} ${this.suit}`;
  }
}
