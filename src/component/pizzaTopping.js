import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addTopping } from "../actions/pickAction";

class PizzaTopping extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      checked: "",

      isGoing: true,
      numberOfGuests: 2,
      count: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.state.info.push(event.target.name);

    console.log(this.state.info.length);
    console.log(this.state.info);
    this.props.addTopping(Number(event.target.value));
  }

  render() {
    return (
      <div className="Square">
        <p> Chose max 3 topping </p>
        <input
          type="checkbox"
          name="1"
          value="0.5"
          onChange={this.handleInputChange}
        />Pineapple<br />
        <input
          type="checkbox"
          name="2"
          value="0.5"
          onChange={this.handleInputChange}
        />Corn<br />
        <input
          type="checkbox"
          name="3"
          value="0.5"
          onChange={this.handleInputChange}
        />Olives (green)<br />
        <input
          type="checkbox"
          name="4"
          value="0.5"
          onChange={this.handleInputChange}
        />Spinach<br />
        <input
          type="checkbox"
          name="5"
          value="0.5"
          onChange={this.handleInputChange}
        />Cherry tomatoes<br />
        <input
          type="checkbox"
          name="6"
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
export default connect(mapStateToProps, { addTopping })(PizzaTopping);

// checked="true"
// disabled="true"
