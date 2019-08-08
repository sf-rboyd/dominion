import React from "react";
import "./icon.scss";

const Icon = ({ icon, onToggle }) => {
  return <div className={getClassNames(icon)} onClick={() => onToggle(icon)} />;
};

export default Icon;

function getClassNames(icon) {
  let classes = "Icon Icon--";
  classes += icon.name;
  if (icon.isToggled) {
    classes += " Icon--" + icon.name + "--toggled";
  }
  return classes;
}
