import React from "react";

import Header from "./components/Header/Header";
import StoreProvider from "./store/StoreProvider";

import "./App.sass";

const App = () => (
  <StoreProvider>
    <Header />
  </StoreProvider>
);

export default App;
