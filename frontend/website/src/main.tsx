import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/global.scss";

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <main className="flex">
      <App />
    </main>
  </React.StrictMode>
);
