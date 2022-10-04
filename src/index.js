import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
