import React, { Component } from "react";

type CounterProps = { label?: string };

class Counter extends Component<CounterProps> {
  render() {
    const { label = "Count" } = this.props;
    return (
      <div>
        <label htmlFor={"counter"}>{label}</label>
        <input id="counter" role="textbox" value={1} />
      </div>
    );
  }
}

export default Counter;
