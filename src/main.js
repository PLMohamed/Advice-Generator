import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";

// render strict mode and app to the root element
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
