import React, { Component } from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button href="" onClick={props.onClick} style={{ background: "#673AB7" }}>
    {props.children}
  </button>
);
Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
