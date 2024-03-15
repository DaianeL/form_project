import Botao from "../Botao";
import Input from "../Input";
import Label from "../Label";
import MenuSuspenso from "../MenuSuspenso";

function Formulario() {
  const Cursos = [
    "",
    "Front-end",
    "Back-end",
    "FullStack",
    "Design",
    "QA",
    "Engenharia de Software",
  ];

  // função callback = uma funcionalidade de ação, que se conectará a algo para executar alguma coisa.
  function Enviar(evento) {
    evento.preventDefault();
    // ao utilizar o método evento.preventDefault estamos previnindo o comportamento padrão do submit, ou seja, eu estou assumindo o controle do que eu quero que aconteça a partir daqui. Estou dizendo ao  submit - NÃO SIGA O SEU COMPORTAMENTO PADRÃO.
    return console.log("Dados salvos!");
  }

  return (
    <div className="flex justify-center p-20">
      <form
        onSubmit={Enviar}
        className="shadow-2xl flex flex-col p-4 bg-slate-100 w-full h-96 rounded-xl"
      >
        <h1 className="text-xl mb-5 font-extrabold text-center">FORMULÁRIO</h1>
        <Label label="Nome" />
        <Input obrigatorio={true} placeholder="Digite o seu nome" />
        <Label label="E-mail" />
        <Input obrigatorio={true} placeholder="Digite o seu e-mail" />
        <Label label="Senha" />
        <Input obrigatorio={true} placeholder="Digite a sua senha" />
        <MenuSuspenso
          obrigatorio={true}
          label="Menu de opções"
          cursos={Cursos}
        />
        <Botao obrigatorio={true}>Enviar</Botao>
      </form>
    </div>
  );
}
export default Formulario;
