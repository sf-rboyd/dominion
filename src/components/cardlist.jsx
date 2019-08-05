import React, { Component } from "react";
import Card from "./card";
import cards from "../data/cards.json";
import "./cardlist.scss";

class CardList extends Component {
  constructor() {
    super();
    this.state = { cards: cards.slice(0, 10) }; // Gets first 10 cards
  }

  render() {
    return (
      <ul className="CardList">
        {this.state.cards.map(card => (
          <Card key={card.name} card={card} />
        ))}
      </ul>
    );
  }
}

export default CardList;
