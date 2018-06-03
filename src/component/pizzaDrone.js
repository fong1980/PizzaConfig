import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addDrone } from "../actions/pickAction";

class PizzaDrone extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let discount = 0;

    if (event.target.checked) {
      discount = 0.9;
    } else {
      discount = 1;
    }

    //const value = target.type === "checkbox" ? target.checked : target.value;
    this.props.addDrone(Number(discount));
    // const target = event.target;
    // const name = target.name;
  }

  render() {
    return (
      <form>
        <label>
          <input
            name="choseBase"
            type="checkbox"
            value="8.99"
            checked={this.state.inGoing}
            onChange={this.handleInputChange}
          />
          <strong> For extra quick delivery by drone!.</strong>
        </label>
        <br />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { addDrone })(PizzaDrone);
