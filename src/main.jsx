import App from './App.jsx'; 

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'; 



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
