import React, { Component } from "react";
import SuperHeroSearch from "./SuperHeroSearch";
import SuperHeroProfile from "./SuperHeroProfile";

const API = "https://superheroapi.com/api.php/163762711460288/search";

class SuperHeroDB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: "",
      superHeroName: "Superman",
      realName: "",
      alignmnent: ""
    };
  }

  getSuperHero(superHeroName) {
    let URL = `${API}/${superHeroName}`;

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log("test", data);

        this.setState({
          superHeroName: data.results.name
          // superHeroName: data.results.name,
          // realName: data.biography.fullname,
          // alignmnent: data.biolgraphy.alignment,
          // image: data.image.url
        });
        console.log("yoooo?", data.results[0].name);
        console.log("yoooo?", data.results.map(x => x.name));
      })
      .catch(error => console.log("Stop! You can't fetch this!"));
  }

  componentDidMount() {
    this.getSuperHero(this.state.superHeroName);
  }

  render() {
    console.log("hello?", this.state.superHeroName);

    return (
      <div>
        <SuperHeroSearch searchSuperHero={this.getSuperHero.bind(this)} />

        <SuperHeroProfile superHero={this.state} />
      </div>
    );
  }
}

export default SuperHeroDB;
