/** @format */

import React from "react";
import newUpdatedComponent from "./HigherOrderFun";

class CounterHOC extends React.Component {
  render() {
     let { count, incrementCount } = this.props;
    return (
      <>
        <button onClick={incrementCount}>Clicked times {count}</button>
      </>
    );
  }
}

export default newUpdatedComponent(CounterHOC,10)
