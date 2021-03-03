import React, { Component } from 'react';
import "./Stopwatch.css"





class Stopwatch extends Component {
  constructor() {
    super()
    this.intervalActive = false;
    this.timer = null;
    this.state = {
      counter: 0
    }
  }
  handleStart = () => {
    if (this.intervalActive) return;
    this.timer = setInterval(()=> {
      this.setState({counter: this.state.counter + 1})
    }, 1000);
    this.intervalActive = true;
  }

  handlePause = () => {
    clearInterval(this.timer)
    this.intervalActive = false;
  }

  handleReset = ()=>{
    console.log(this.state.counter)
    this.intervalActive = false;
    this.setState({counter: 0});
    clearInterval(this.timer)
  }

  render() {
    console.log(this.state)
    return (
      <div className="stopwatch">{this.props.stopwatch}
        <h1>{this.state.counter}</h1>
        <div className="controls">
          <button onClick={this.handleReset}>Reset</button>
          <button onClick={this.handleStart}>Start</button>
          <button onClick={this.handlePause}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
