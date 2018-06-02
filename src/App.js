//app.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counter"; //step6
import logo from "./logo.svg";
import "./App.css";
import PizzaBase from "./component/pizzaBase";
import PizzaSauce from "./component/pizzaSauce";
import PizzaTopping from "./component/pizzaTopping";

class App extends Component {
  handleClick = () => {
    this.props.increment(); //step 7
  };
  handleClick_ = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="App">
        <div>
          <h2>here comes the sun2</h2>
        </div>
        <PizzaBase />
        <PizzaSauce />
        <PizzaTopping />
      </div>
    );
  }
}

//step 4
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(mapStateToProps, { increment, decrement })(App); //step 4 //step 6 (increment +decrement)
