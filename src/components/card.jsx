import React from "react";
import "./card.scss";

const Card = ({ card }) => {
  const source = "/" + card.expansion + "/" + card.name + ".jpg";

  return (
    <div className="Card">
      <img
        className="Card__image"
        src={process.env.PUBLIC_URL + "/assets/images/cards" + source}
        alt={card.name}
      />
    </div>
  );
};

export default Card;
