import React, { Component } from "react";

class SuperHeroSearch extends Component {
  submitSearch = e => {
    e.preventDefault();
    let value = this.refs.superHeroName.value;
    console.log("Blip", value);
    this.props.searchSuperHero(value);
    this.refs.superHeroName.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch.bind(this)}>
          <label>
            <input
              placeholder="enter your favorite superhero"
              type="search"
              ref="superHeroName"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SuperHeroSearch;
