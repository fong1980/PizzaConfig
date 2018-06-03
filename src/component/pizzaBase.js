import React, { PureComponent, Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addBase } from "../actions/pickAction";

class PizzaBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.addBase(event.target.value);

    // const target = event.target;
    // const name = target.name;
  }

  render() {
    return (
      <form>
        <label>
          <input
            name="choseBase"
            type="radio"
            value="8,99"
            onChange={this.handleInputChange}
          />25cm NY Style € 8,99
          <input
            name="choseBase"
            type="radio"
            value="11,49"
            onChange={this.handleInputChange}
          />30cm NY Style € 11,49
          <input
            name="choseBase"
            type="radio"
            value="13,49"
            onChange={this.handleInputChange}
          />35cm NY Style € 13,49
          <input
            name="choseBase"
            type="radio"
            value="6,45"
            onChange={this.handleInputChange}
          />20cm NY Style € 6,45
        </label>
        <br />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { addBase })(PizzaBase);
