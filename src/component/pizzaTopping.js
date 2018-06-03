import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addTopping } from "../actions/pickAction";

class PizzaTopping extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.addTopping(event.target.value);
    // const target = event.target;
    // const name = target.name;
    // adf
  }

  render() {
    return (
      <div className="Square">
        <p> Chose Topping </p>
        <input
          type="checkbox"
          name="vehicle"
          value={0.5}
          onChange={this.handleInputChange}
        />Pineapple
        <input
          type="checkbox"
          name="vehicle"
          value="0,5"
          onChange={this.handleInputChange}
        />Corn
        <input
          type="checkbox"
          name="vehicle"
          value="0,5"
          onChange={this.handleInputChange}
        />Olives (green)
        <input
          type="checkbox"
          name="vehicle"
          value="0,5"
          onChange={this.handleInputChange}
        />Spinach
        <input
          type="checkbox"
          name="vehicle"
          value="0,5"
          onChange={this.handleInputChange}
        />Cherry tomatoes
        <input
          type="checkbox"
          name="vehicle"
          value="0,5"
          onChange={this.handleInputChange}
        />Chicken
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { addTopping })(PizzaTopping);

// var limit = 3;
// $('input.single-checkbox').on('change', function(evt) {
//    if($(this).siblings(':checked').length >= limit) {
//        this.checked = false;
//    }
// });

// <div class="pricing-levels-3">
// <p><strong>Which level would you like? (Select 3 Levels)</strong></p>
// <input class="single-checkbox"type="checkbox" name="vehicle" value="Bike">Level 1<br>
// <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 2<br>
// <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 3<br>
// <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 4<br>
// <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 5<br>
// <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 6<br>
// <input class="single-checkbox" type="checkbox" name="vehicle" value="Bike">Level 7<br>
// </div>
