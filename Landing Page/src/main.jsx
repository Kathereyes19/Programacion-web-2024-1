import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

const appContainer = document.querySelector("#app")
const root = createRoot(appContainer)

root.render(<App />)

console.log(appContainer)

