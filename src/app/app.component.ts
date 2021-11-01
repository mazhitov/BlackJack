import {Component} from '@angular/core';
import {CardDeck} from "../lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardDeck = new CardDeck();
  currentCards = this.cardDeck.getCards(2);

  getScoreCards() {
    let score = 0;
    for (const card of this.currentCards) {
      score += card.getScore();
    }
    return score;
  }

  onGiveAnotherCard() {
    this.currentCards.push(this.cardDeck.getCard());
  }

  onReset() {
    this.cardDeck = new CardDeck();
    this.currentCards = this.cardDeck.getCards(2);
  }
}
