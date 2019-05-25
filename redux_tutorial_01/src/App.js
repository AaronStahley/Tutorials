import React, { Component } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Posts from "./components/Posts";
import Postform from "./components/Postform";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
