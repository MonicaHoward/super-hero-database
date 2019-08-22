import React, { Component } from "react";
import SuperHeroDB from "./shdb/SuperHeroDB";

class Header extends Component {
  render() {
    return (
      <div className="main">
        <h1 className="title">Official Super Hero Database</h1>
        <p>Find info on thousands of Super Heroes</p>
        <SuperHeroDB />
      </div>
    );
  }
}
export default Header;
