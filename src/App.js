import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles.css";

import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import Users from "./users/containers/Users";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <CounterContainer />
          <Posts />
          <Users />
        </Provider>
      </div>
    );
  }
}
