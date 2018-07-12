
import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <img src="https://vignette.wikia.nocookie.net/overwatch/images/5/54/Spray_-_Logo.png/revision/latest?cb=20160715182447" alt="Overwatch logo" width="80" height="73" class="d-inline-block align-top"/>
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;