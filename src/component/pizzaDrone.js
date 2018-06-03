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
    let discount = 1;

    if (event.target.checked) {
      discount = 1.1;
    } else {
      discount = 1;
    }
    this.props.addDrone(Number(discount));
  }

  render() {
    return (
      <form>
        <br />
        <label>
          <input
            name="choseBase"
            type="checkbox"
            value="8.99"
            checked={this.state.inGoing}
            onChange={this.handleInputChange}
          />
          <strong> For extra quick delivery by drone! +10%</strong>
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
