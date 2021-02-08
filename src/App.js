import React from "react";
import { createStore } from "redux";
import "./styles.css";

import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import Users from "./users/containers/Users";
import reducer, { inc, dec, reset } from "./counter/redux";

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(inc());
store.dispatch(dec());
store.dispatch(inc());
store.dispatch(inc());
store.dispatch(reset());

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

