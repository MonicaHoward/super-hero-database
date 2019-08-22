import React, { Component } from "react";

class SuperHeroProfile extends Component {
  render() {
    let superHero = this.props.superHero;
    let name = `${superHero.superHeroName}`;

    if (superHero.notFound === "User Not Found") {
      return <div>hey ya</div>;
    } else {
      return <div>{superHero.name}</div>;
    }
  }
}

export default SuperHeroProfile;
