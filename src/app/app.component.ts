import { Component } from '@angular/core';
import {CardDeck} from "../lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardDeck = new CardDeck();
  currentCards = this.cardDeck.getCards(2);
}
