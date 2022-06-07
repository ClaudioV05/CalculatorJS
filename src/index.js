import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import Calculator from "./Main/Calculator";
import "./App.css"

const title = "Calculadora";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <h1>{title}</h1>
    <Calculator />
  </StrictMode>
);