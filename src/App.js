import React from "react";
import "./App.css";
import store from "./store";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../src/common/header";
import Home from "../src/pages/home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
