import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import PortfolioApp from "./js/PortfolioApp";
import registerServiceWorker from "./js/registerServiceWorker";

ReactDOM.render(<PortfolioApp />, document.getElementById("root"));
registerServiceWorker();
