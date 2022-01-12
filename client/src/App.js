import React from "react";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
