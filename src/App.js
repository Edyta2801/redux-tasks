import React from "react";
import "./styles.css";

import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import Users from "./users/containers/Users";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterContainer />
        <Posts />
        <Users />
      </div>
    );
  }
}

