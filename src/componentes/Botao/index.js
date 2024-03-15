function Botao(props) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      {props.children}
    </button>
  );
}

export default Botao;

// Para que possamos escrever dentro da tag componente como se fosse um comportamento de html, utilizaremos a props.children, passando props como argumento. O react nos dá opção de usar este conteúdo de forma aninhada. Ou seja, tudo o que estiver dentro das tags do meu componete principal que deve estar com abertura e fechamento, serão os filhos que o meu componente de botão irão receber. 
