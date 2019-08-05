import React from "react";

const Card = props => {
  const source = "/assets/images/cards/Base/Adventurer.jpg";

  return <img src={process.env.PUBLIC_URL + source} alt="adventurer" />;
};

export default Card;
