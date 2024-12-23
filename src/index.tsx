import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // TailwindCSSを含むCSSファイル
import Header from "./components/Header";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);