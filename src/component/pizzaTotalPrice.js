import React, { PureComponent, Component } from "react";
import { connect } from "react-redux";
import { addTopping } from "../actions/pickAction";

class pizzaTotalprice extends PureComponent {
  componentDidMount() {
    console.log("GrandChild did mount.");
    //console.log(this.prop.waarde, "teddst");
    //console.log(store.getState.addBasereducer, "test");
    console.log(this.props.state, "teddst");
  }
  calcTotal(input) {
    return {
      input
    };
  }
  render() {
    return (
      <form>
        <label>
          <strong>total price:</strong>
        </label>
        <br />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};
export default connect(mapStateToProps, {})(pizzaTotalprice);
