import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addTopping } from "../actions/pickAction";

var disable = [];
class PizzaTopping extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      disable: [], //[0, 0, 0, 0, 0, 0], //0 is aan
      checked: "",

      isGoing: true,
      numberOfGuests: 2,
      count: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState.disable = [0, 0, 0, 0, 1, 0];
    if (!this.state.info.includes(event.target.name)) {
      //nog niet in de array? dan toevoegen
      //console.log("bestaat nog niet");
      this.state.info.push(event.target.name);
    } else {
      //by uncheck, remove id from array
      var index = this.state.info.indexOf(event.target.name);
      if (index > -1) {
        this.state.info.splice(index, 1);
      }
    }
    //console.log(this.state.info.length, "buiten");
    if (this.state.info.length > 3) {
      (this.setState.disable = [1, 1, 1, 1, 1, 1]),
        this.state.info.map(x => {
          this.state.disable[x - 1] = 0;
        });

      console.log(this.state.disable, "ik ben van disable");
    }

    const toppingTotal = this.state.info.length * 0.5;

    this.props.addTopping(Number(toppingTotal));
  }

  render() {
    return (
      <div className="Square">
        {console.log(this.state.disable, "ik kom uit render")}
        <p> Chose max 3 topping </p>
        <input
          type="checkbox"
          name="1"
          value="0.5"
          disabled={this.state.disable[0]}
          onChange={this.handleInputChange}
        />Pineapple<br />
        <input
          type="checkbox"
          name="2"
          value="0.5"
          disabled={this.state.disable[1]}
          onChange={this.handleInputChange}
        />Corn<br />
        <input
          type="checkbox"
          name="3"
          value="0.5"
          disabled={this.state.disable[2]}
          onChange={this.handleInputChange}
        />Olives (green)<br />
        <input
          type="checkbox"
          name="4"
          value="0.5"
          disabled={this.state.disable[3]}
          onChange={this.handleInputChange}
        />Spinach<br />
        <input
          type="checkbox"
          name="5"
          value="0.5"
          disabled={this.state.disable[4]}
          onChange={this.handleInputChange}
        />Cherry tomatoes<br />
        <input
          type="checkbox"
          name="6"
          value="0.5"
          disabled={this.state.disable[5]}
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
