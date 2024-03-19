import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Formulario from "./componentes/Formulario";
import Footer from "./componentes/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Formulario />
    <Footer />
  </React.StrictMode>
);
