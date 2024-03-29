import React from "react";
import ReactDOM from "react-dom/client";

import RootProvider from "~/providers/index.tsx";

import App from "./App.tsx";
import "./index.css";
import "@smastrom/react-rating/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>
);
