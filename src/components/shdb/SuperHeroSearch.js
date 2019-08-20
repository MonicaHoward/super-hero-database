import React, { Component } from "react";

class SuperHeroSearch extends Component {
  submitSearch = e => {
    e.preventDefault();
    let value = this.refs.superHeroName.value;
    this.props.searchSuperHero(value);
    this.ref.superHeroName.value = "";
  };

  render() {
    return (
      <div>
        <form>
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
