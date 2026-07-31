import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Search from "./Search.jsx";
import Timer from "./Timer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Search /> */}
    {/* <Timer /> */}
  </StrictMode>,
);
