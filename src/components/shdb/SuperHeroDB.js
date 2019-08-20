import React, { Component } from "react";
import SuperHeroSearch from "./SuperHeroSearch";

const API = "http://superheroapi.com/api.php/163762711460288/search";

class SuperHeroDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg",
      superHeroName: "Superman",
      realName: "",
      alignmnent: ""
    };
  }

  getSuperHero(superHeroName) {
    let url = `${API}/${superHeroName}`;

    fetch(url)
      .then(res => res.json)
      .then(data => {
        this.setState({
          image: data.image.url,
          superHeroName: data.name,
          realName: data.biography.fullname,
          alignmnent: data.biolgraphy.alignment
        });
      })
      .catch(error => console.log("Stop! You can't fetch this!"));
  }

  componenntDidMount() {
    this.getSuperHero(this.state.superHeroName);
  }

  render() {
    console.log("hello?", this.state.superHeroName);
    return (
      <div>
        <SuperHeroSearch searchSuperHero={this.getSuperHero.bind(this)} />
      </div>
    );
  }
}

export default SuperHeroDB;
