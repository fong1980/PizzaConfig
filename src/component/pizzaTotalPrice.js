import React, { PureComponent } from "react";
import { connect } from "react-redux";

class pizzaTotalprice extends PureComponent {
  calcTotal() {
    const tekst = "test";
    return {
      tekst
    };
  }
  render() {
    return (
      <form>
        <label>
          <p />
          <p />
          <strong>
            total price:{" "}
            {(this.props.pizzaBase +
              this.props.pizzaSauce +
              this.props.pizzaTopping) *
              this.props.pizzaDrone}
          </strong>
        </label>
        <br />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzaBase: state.addBaseReducer,
    pizzaSauce: state.addSauceReducer,
    pizzaTopping: state.addToppingReducer,
    pizzaDrone: state.addDroneReducer
  };
};
export default connect(mapStateToProps, {})(pizzaTotalprice);
