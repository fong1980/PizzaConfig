import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { addSauce } from "../actions/pickAction";

class PizzaSauce extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.props.addSauce(Number(event.target.value));
  }

  render() {
    return (
      <form>
        <label>
          <p> Chose Sauce </p>
          <input
            name="choseSauce"
            type="radio"
            value="0"
            onChange={this.handleInputChange}
          />
          White sauce <br />
          <input
            name="choseSauce"
            type="radio"
            value="0"
            onChange={this.handleInputChange}
          />Red sauce<br />
          <input
            name="choseSauce"
            type="radio"
            value="1"
            onChange={this.handleInputChange}
          />Double red sauce € 1,00<br />
          <input
            name="choseSauce"
            type="radio"
            value="1.5"
            onChange={this.handleInputChange}
          />Mix it up € 1,50<br />
        </label>
        <br />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { addSauce })(PizzaSauce);
