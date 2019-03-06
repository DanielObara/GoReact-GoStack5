import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button
        href=""
        onClick={this.props.onClick}
        style={{ background: "#673AB7" }}
      >
        {this.props.children}
      </button>
    );
  }
}

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
    this.setState(state => ({ counter: state.counter + 1 }));
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
