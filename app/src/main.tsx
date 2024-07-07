import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/globals.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

const baseName = window.__APP_BASE__ || "/";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter basename={baseName}>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
