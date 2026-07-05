import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

const rootNode = document.getElementById("app-root");

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
