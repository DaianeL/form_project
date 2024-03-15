function Input(props) {
  let valor = "";

  function InputDigitado(evento) {
    valor = evento.target.value;
    return console.log(valor);
  }

  return (
    <div>
      <input
        onChange={InputDigitado}
        required={props.obrigatorio}
        className="border-2 text-center  hover:bg-blue-100 w-full mb-2 rounded"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
}

export default Input;

//
