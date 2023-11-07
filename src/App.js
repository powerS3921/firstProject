import React from "react";

import StoreProvider from "./store/StoreProvider";

import "./App.sass";

const App = () => (
  <StoreProvider>
    <header>Hello World!</header>
  </StoreProvider>
);

export default App;
