import { useState } from "react";

function Input(props) {
  // let valor = "";

  // ao invés de declarar o valor em uma variável, iremos utilizar o state para ler e alterar o estado de um componente.
  const [valor, setValor] = useState("");
  // um exemplo de useState iniciando preechido é quando eu quero que o form inicie com algum item preenchido
  // Aqui temos um array com duas variáveis. valor = é o estado e setValor = função para atualizar este estado

  function InputDigitado(evento) {
    props.inputAlterado(evento.target.value)
    // setValor(evento.target.value);
    // console.log(valor);
    // na função InputDigitado, inseri um evento que ficará observando os inputs. A função setValor tem por objetivo atualizar o estado ou seja: meu evento ouviu um input em seguida pegou o valor digitado atualizou o estado e mostrou o valor atualizado no console.
  }

  return (
    <div>
      <input
        value={props.valor}
        onChange={InputDigitado}
        required={props.obrigatorio}
        className="border-2 text-center text-md hover:bg-blue-100 w-full mb-2 rounded"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;

//
