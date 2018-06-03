import React, { PureComponent } from "react";
import { connect } from "react-redux";
//import { addTopping } from "../actions/pickAction";

class Test extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.addTopping(Number(event.target.value));
  }

  render() {
    return (
      <div className="Square">
        <p> Chose max 3 topping </p>
        <input
          type="checkbox"
          name="vehicle"
          value="0.5"
          onChange={this.handleInputChange}
        />Pineapple<br />
        <input
          type="checkbox"
          name="vehicle"
          value="0.5"
          onChange={this.handleInputChange}
        />Corn<br />
        <input
          type="checkbox"
          name="vehicle"
          value="0.5"
          onChange={this.handleInputChange}
        />Olives (green)<br />
        <input
          type="checkbox"
          name="vehicle"
          value="0.5"
          onChange={this.handleInputChange}
        />Spinach<br />
        <input
          type="checkbox"
          name="vehicle"
          value="0.5"
          onChange={this.handleInputChange}
        />Cherry tomatoes<br />
        <input
          type="checkbox"
          name="vehicle"
          value="0.5"
          onChange={this.handleInputChange}
        />Chicken<br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, {})(Test);
