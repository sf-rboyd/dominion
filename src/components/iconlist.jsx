import React from "react";
import Icon from "./icon";
import "./iconlist.scss";

const IconList = ({ icons, onToggle }) => {
  return (
    <ul className="IconList">
      {icons.map(icon => (
        <Icon key={icon.name} icon={icon} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default IconList;
