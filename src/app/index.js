import React, { Component } from "react";
import { Provider } from "react-redux";
import createStore from "../redux/store";
import Router from "../navigation";
import Connection from "../libs/connection";

export default class App extends Component {
  componentDidMount() {
    this.globalEventListener = new Connection();
    this.globalEventListener.startListener();
  }

  componentWillUnmount() {
    if (this.globalEventListener) {
      this.globalEventListener.cleanUp();
    }
  }

  render() {
    return (
      <Provider store={createStore()}>
        <Router />
      </Provider>
    );
  }
}
