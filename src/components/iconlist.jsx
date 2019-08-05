import React, { Component } from "react";
import Icon from "./icon";
import "./iconlist.scss";

class IconList extends Component {
  state = {
    icons: [
      { name: "Base", isToggled: true },
      { name: "Intrigue", isToggled: false },
      { name: "Seaside", isToggled: false },
      { name: "Alchemy", isToggled: false },
      { name: "Prosperity", isToggled: false },
      { name: "Cornucopia", isToggled: false },
      { name: "Hinterlands", isToggled: false },
      { name: "Dark-Ages", isToggled: false },
      { name: "Guilds", isToggled: false },
      { name: "Adventures", isToggled: false },
      { name: "Empires", isToggled: false },
      { name: "Nocturne", isToggled: false },
      { name: "Renaissance", isToggled: false }
    ]
  };

  handleToggle = icon => {
    const icons = [...this.state.icons];
    const index = icons.indexOf(icon);
    icons[index] = { ...icon }; // clone, cannot modify state directly
    icons[index].isToggled = !icons[index].isToggled;
    this.setState({ icons });
  };

  render() {
    return (
      <ul className="CardList">
        {this.state.icons.map(icon => (
          <Icon key={icon.name} icon={icon} onToggle={this.handleToggle} />
        ))}
      </ul>
    );
  }
}

export default IconList;
