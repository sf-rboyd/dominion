import React from "react";
import Icon from "./icon";
import "./iconlist.scss";

const IconList = ({ icons, onToggle }) => {
  return (
    <div className="IconList">
      {icons.map(icon => (
        <Icon key={icon.name} icon={icon} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default IconList;
