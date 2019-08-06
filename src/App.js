import React, { Component } from "react";
import "./App.scss";
import IconList from "./components/iconlist";
import CardList from "./components/cardlist";
import cardRepository from "./data/cards.json";
import expansionRepository from "./data/expansions.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: cardRepository.slice(0, 10),
      icons: expansionRepository.map(expansion => ({
        name: expansion.name,
        color: expansion.color,
        isToggled: expansionRepository.indexOf(expansion) === 0 ? true : false
      }))
    };
  }

  handleToggle = icon => {
    const icons = [...this.state.icons];
    const index = icons.indexOf(icon);
    icons[index].isToggled = !icons[index].isToggled;
    if (icons.filter(icon => icon.isToggled).length === 0) {
      icons[0].isToggled = true;
    }
    this.setState({ icons });
  };

  handleRandomize = () => {
    const selectedExpansions = this.state.icons
      .filter(icon => icon.isToggled === true)
      .map(icon => icon.name);
    const availableCards = cardRepository.filter(
      card => selectedExpansions.includes(card.expansion) && card.edition !== 1
    );
    let indices = [...Array(availableCards.length).keys()];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const cards = indices.slice(0, 10).map(i => availableCards[i]);
    this.setState({ cards: cards });
  };

  render() {
    return (
      <div className="App">
        <IconList icons={this.state.icons} onToggle={this.handleToggle} />
        <button className="button" onClick={this.handleRandomize}>
          Randomize
        </button>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
