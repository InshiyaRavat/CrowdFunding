import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      desiredChainId = {11155111}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <Router>
        <App />
      </Router> 
    </ThirdwebProvider>
  </React.StrictMode>
);


