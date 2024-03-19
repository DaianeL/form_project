import { useState } from "react";
import Botao from "../Botao";
import Input from "../Input";
import Label from "../Label";
import MenuSuspenso from "../MenuSuspenso";

function Formulario() {
  // Objeto com a relação de cursos disponíveis na
  const Cursos = [
    "",
    "Introdução à Programação em Python",
    "Desenvolvimento Web com HTML, CSS e JavaScript",
    "Curso de Java para Iniciantes",
    "Programação Orientada a Objetos em C++",
    "Desenvolvimento de Aplicativos para Android com Kotlin",
    "Curso de Data Science com Python",
    "Desenvolvimento de Jogos com Unity",
    "Aprendizado de Máquina (Machine Learning) com Python",
    "Desenvolvimento de Aplicativos iOS com Swift",
    "Curso de Desenvolvimento de API REST com Node.js",
  ];

  // estados
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nascimento, setNascimeto] = useState("");
  const [cursos, setCursos] = useState("");
  // função callback = uma funcionalidade de ação, que se conectará a algo para executar alguma coisa.
  function Enviar(evento) {
    evento.preventDefault();
    // ao utilizar o método evento.preventDefault estamos previnindo o comportamento padrão do submit, ou seja, eu estou assumindo o controle do que eu quero que aconteça a partir daqui. Estou dizendo ao  submit - NÃO SIGA O SEU COMPORTAMENTO PADRÃO, execute e pare.
    console.log(`Form foi submetido =>`, nome, sobrenome, nascimento, cursos);
  }

  return (
    <div className=" p-20 h-screen w-100">
      <form
        onSubmit={Enviar}
        className="shadow-2xl flex flex-col p-4 bg-slate-100 w-full h-96 rounded-xl"
      >
        <h1 className=" flex justify-center text-xl mb-5 font-extrabold text-center">
          FORMULÁRIO
        </h1>
        <Label label="Nome" />
        <Input
          obrigatorio={true}
          placeholder="Digite seu nome"
          valor={nome}
          inputAlterado={(valor) => setNome(valor)}
        />
        <Label label="Sobrenome" />
        <Input
          obrigatorio={true}
          placeholder="Digite seu sobrenome"
          valor={sobrenome}
          inputAlterado={(valor) => setSobrenome(valor)}
        />
        <Label label="Data de nascimento" />
        <Input
          obrigatorio={true}
          placeholder="dia/mês/ano"
          valor={nascimento}
          inputAlterado={(valor) => setNascimeto(valor)}
        />
        <MenuSuspenso
         obrigatorio={true}
          cursos={Cursos}
           valor={cursos}
           inputAlterado={valor => setCursos(valor)}
           
           />
        <Botao obrigatorio={true}>Enviar</Botao>
      </form>
    </div>
  );
}
export default Formulario;
