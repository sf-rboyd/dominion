import React from "react";
import Icon from "./icon";
import "./iconlist.scss";

const IconList = () => {
  const icons = [
    { name: "Base" },
    { name: "Intrigue" },
    { name: "Seaside" },
    { name: "Alchemy" },
    { name: "Prosperity" },
    { name: "Cornucopia" },
    { name: "Hinterlands" },
    { name: "Dark-Ages" },
    { name: "Guilds" },
    { name: "Adventures" },
    { name: "Empires" },
    { name: "Nocturne" },
    { name: "Renaissance" }
  ];
  return (
    <ul className="IconList">
      {icons.map(icon => (
        <Icon key={icon.name} icon={icon} />
      ))}
    </ul>
  );
};

export default IconList;
