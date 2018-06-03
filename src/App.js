//app.js
import React, { Component } from "react";

import PizzaBase from "./component/pizzaBase";
import PizzaSauce from "./component/pizzaSauce";
import PizzaTopping from "./component/pizzaTopping";

class App extends Component {
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

export default App;
