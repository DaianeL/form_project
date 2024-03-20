import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Formulario from "./componentes/Formulario";
// import Footer from "./componentes/Footer";
import Matriculados from "./componentes/Matriculados";

function App() {
  const matriculados = [
    {
      nome: "Introdução à Programação em Python",
      corPrimaria: "#7dd3fc",
      corSecundaria: "#172554",
    },
    {
      nome: "",
      corPrimaria: "#38bdf8",
      corSecundaria: "#1e3a8a",
    },
    {
      nome: "",
      corPrimaria: "#0ea5e9",
      corSecundaria: "#0284c7",
    },
    {
      nome: "",
      corPrimaria: "#0369a1",
      corSecundaria: "",
    },
    {
      nome: "",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "",
      corPrimaria: "",
      corSecundaria: "",
    },
    {
      nome: "",
      corPrimaria: "",
      corSecundaria: "",
    },
  ];
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Formulario />
    {/* <Matriculados nome="Introdução à Programação em Python" />
    <Matriculados nome="Desenvolvimento Web com HTML, CSS e JavaScript" />
    <Matriculados nome="Curso de Java para Iniciantes" />
    <Matriculados nome="Programação Orientada a Objetos em C++" />
    <Matriculados nome="Desenvolvimento de Aplicativos para Android com Kotlin" />
    <Matriculados nome="Curso de Data Science com Python" />
    <Matriculados nome="Desenvolvimento de Jogos com Unity" />
    <Matriculados nome="Aprendizado de Máquina (Machine Learning) com Python" />
    <Matriculados nome="Desenvolvimento de Aplicativos iOS com Swift" />
    <Matriculados nome="Curso de Desenvolvimento de API REST com Node.js" /> */}
    {/* <Footer /> */}
  </React.StrictMode>
);
export default App;
