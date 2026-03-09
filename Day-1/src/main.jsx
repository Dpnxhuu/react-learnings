import { createRoot } from "react-dom/client";
import App, { NamedExpoOne, NamedExpoTwo } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App/>
    <NamedExpoOne/>
    <NamedExpoTwo/>
  </>
);
