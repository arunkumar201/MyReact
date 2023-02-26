/** @format */

// this consist the counter logic
import React, { Component } from "react";
const newUpdatedComponent = (OriginalComponent,IncrementNumber) => {
  class New_HOC_Component extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount() {
      console.log(this.state.count);
      this.setState((prevCount) => ({
        count: prevCount.count + IncrementNumber,
      }));
    }
    render() {
      console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return New_HOC_Component;
};
export default newUpdatedComponent;
