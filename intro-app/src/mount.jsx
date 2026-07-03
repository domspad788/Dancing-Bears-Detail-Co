import { createRoot } from "react-dom/client";
import IntroApp from "./IntroApp";
import "./intro.css";

const el = document.getElementById("db-intro-root");
if (el) {
  createRoot(el).render(<IntroApp />);
}
