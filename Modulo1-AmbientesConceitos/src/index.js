import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    //o SetState é assincrona então ele leva um tempo para ser efetuado
    // this.setState({ counter: this.state.counter + 1 });
    //se colocassemos o console.log aqui ele apresentaria ainda o 0 pois ainda não foi atualizado o estado.

    /* 
      Desta forma o state passado como parametro é alterado automaticamente.
    */
    this.setState(state => ({ counter: this.state.counter + 1 }));
  };

  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
