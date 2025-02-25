import React from "react";
import { createRoot } from "react-dom/client"; 
import Menu from "./components/Menu";
import data from "./data/recipes.json";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); 
root.render(<Menu recipes={data} />); 