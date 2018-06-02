//app.js
import React, { Component } from "react"
import { connect } from "react-redux"
import { increment, decrement } from "./actions/counter" //step6
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  handleClick = () => {
    this.props.increment() //step 7
  }
  handleClick_ = () => {
    this.props.decrement()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        // step 5
        <h1>{this.props.counter} </h1>
        <button onClick={this.handleClick}>+</button> //step 7
        <button onClick={this.handleClick_}>-</button>
      </div>
    )
  }
}

//step 4
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, { increment, decrement })(App) //step 4 //step 6 (increment +decrement)
