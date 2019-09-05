import React from "react";
import "./App.css";
import store from "./store";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../src/common/header";
import Home from "../src/pages/home";
import More from '../src/pages/more'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/more" component={More} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
