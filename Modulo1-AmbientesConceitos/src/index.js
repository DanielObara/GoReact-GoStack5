import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';
import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  // Executa na inicialização do componente
  // Ideal para consulta API e EventListners
  // componentDidMount() {}

  // //Contrario do DidMount, ideal para limpar os eventListners etc.
  // componentWillUnmount = () => {};

  // //Toda vez que sofrer alterações podemos vetar a renderização
  // shouldComponentUpdate = (nextProps, nextState) => {};

  // //Depois de ter efetuado a alteração/atualização do estado.
  // componentDidUpdate = (prevProps, prevState) => {};

  handleClick = () => {
    // o SetState é assincrona então ele leva um tempo para ser efetuado
    // this.setState({ counter: this.state.counter + 1 });
    // se colocassemos o console.log aqui ele apresentaria ainda o 0
    // pois ainda não foi atualizado o estado.

    /*
      Desta forma o state passado como parametro é alterado automaticamente.
    */

    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h2 style={{ color: '#f00' }}>{counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
