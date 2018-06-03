//app.js
import React, { Component } from "react";

import PizzaBase from "./component/pizzaBase";
import PizzaSauce from "./component/pizzaSauce";
import PizzaTopping from "./component/pizzaTopping";
import PizzaDrone from "./component/pizzaDrone";
import PizzaTotalPrice from "./component/pizzaTotalPrice";

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
        <PizzaDrone />
        <PizzaTotalPrice />
      </div>
    );
  }
}

export default App;
