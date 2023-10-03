import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Import store
import { store } from "./redux/store";

// Import Provider

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
