import React from "react";
import Card from "./card";
import "./cardlist.scss";

const CardList = ({ cards }) => {
  return (
    <div className="CardList">
      {cards.map(card => (
        <Card key={card.name} card={card} />
      ))}
    </div>
  );
};

export default CardList;
