import React from "react";
import "./icon.scss";

const Icon = ({ icon }) => {
  let classes = "Icon Icon--";
  classes += icon.name;
  return <li className={classes} />;
};

export default Icon;
