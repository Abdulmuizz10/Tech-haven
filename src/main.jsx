import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { LayoutContextProvider } from "./context/LayoutContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </LayoutContextProvider>
  </React.StrictMode>
);
