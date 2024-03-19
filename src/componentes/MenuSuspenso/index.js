import Label from "../Label";

function MenuSuspenso(props) {
  return (
    <div>
      <Label label="Cursos" />
      <select
        onChange={(evento) => props.inputAlterado(evento.target.value)}
        required={props.obrigatorio}
        className="text-md border-2 hover:bg-blue-100 w-full mb-2 rounded"
      >
        {props.cursos.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
export default MenuSuspenso;

// Para cada item da minha lista, se faz necessário renderizar o menu de opções.
// required está sendo utilizado para tornar a seleção do menu suspenso como obrigatório. Iremos armazenar o valor true em uma variável e utiliza-la em uma props.
