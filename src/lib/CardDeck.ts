const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = ['diams', 'hearts', 'clubs', 'spades'];

export class Card {
  constructor(
    public rank: string,
    public suit: string
  ) {}

  getScore() {
    if (this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
      return 10;
    }
    if (this.rank === 'A') {
      return 11;
    }
    return parseInt(this.rank);
  }
}

export class CardDeck {
  cards: Card[] = [];

  constructor() {
    for (const value of RANKS) {
      for (const valueElement of SUITS) {
        const card = new Card(value, valueElement);
        this.cards.push(card);
      }
    }
  }

  getCard(): Card {
    const indexCards = Math.floor(Math.random() * this.cards.length);
    const [card] = this.cards.splice(indexCards, 1);
    return card;
  }

  getCards(howMany: number): Card[] {
    const cards:Card[] = [];
    for (let i = 0; i < howMany; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}
