import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addTopping } from "../actions/pickAction";

class pizzaTotalprice extends PureComponent {
  componentDidMount() {
    console.log("GrandChild did mount.");
    console.log(this.base, "teddst");
    //console.log(store.getState.addBasereducer, "test");
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

const mapStateToProps = state => ({
  base: state
});
export default connect(mapStateToProps, {})(pizzaTotalprice);
