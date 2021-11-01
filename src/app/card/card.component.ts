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
        return '♦';
      case 'hearts':
        return '♥';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
      default:
        console.log('there is no symbol');
    }
  }
  getClassName() {
    return `card rank-${this.rank.toLowerCase()} ${this.suit}`;
  }
}
