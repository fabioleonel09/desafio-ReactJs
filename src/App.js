
//   *** COMENTÁRIOS DOS ERROS ENCONTRADOS NO CÓDIGO ***

import './App.css'; //não precisava importar, mas, importei por garantia...
import React from 'react';


class App extends React.Component { //retirei a palavra 'Produtos' e coloquei 'App'
  constructor(props) {
    super(props);

    this.state = { produtos: [] };
  }

  handleAddClick = () => { //neste evento, acrescentei '=' e o '=>', de acordo com documentação React
    const { produtos } = this.state;
    const novoProduto = { id: 0, descricao: 'Banana' };

    produtos.push(novoProduto);

    this.setState({ produtos });
  }

  render () {
    const { produtos } = this.state;

    return (
      <div>
        <ul>
        {produtos.map(p => <li>{p.descricao}</li>)}
        </ul>
        <button onClick={this.handleAddClick}>+</button>
      </div>
    );
  }
}
export default App; //acrescentei para fazer a comunicação com o 'index.js'e renderização
